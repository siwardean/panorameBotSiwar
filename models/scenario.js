const mongoose = require("mongoose")

const requiredStringValidator = [
	function (val) {
		let testVal = val.trim()
		return (testVal.length > 0)
	},
	// Custom error text
	'Please supply a value for {PATH}'	
]

const scenarioSchema = new mongoose.Schema({

    group: { type: String, required: true, requiredStringValidator },
    welcomeMessage : {
        text : { type: String, required: true, requiredStringValidator }, 
        mediaUrl : { type: String, default: null }
    }, 
    stages: [{  
        name : { type: String, required: true, requiredStringValidator }, 
        entryPoint : { type: Boolean, required: true }, 
        startMessage : {
            text : { type: String, required: true, requiredStringValidator },
            mediaUrl : { type: String, default: null }
        }, 
        endMessage : {
            text : { type: String, required: true, requiredStringValidator }, 
            mediaUrl : { type: String, default: null }
        }, 
        nextStages : [{ type: String, required: true, requiredStringValidator }], 
        challenges : [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Challenge'
            }
        ]
    }]
})

module.exports = mongoose.model( 'Scenario', scenarioSchema )

