const mongoose = require("mongoose")

const requiredStringValidator = [
	function (val) {
		let testVal = val.trim()
		return (testVal.length > 0)
	},
	// Custom error text
	'Please supply a value for {PATH}'	
]

const challengeSchema = new mongoose.Schema({

    name: {type: String, required: true, validate: requiredStringValidator},
    category: {type: String, required: true, validate: requiredStringValidator},
    startMessage: {
        text: { type: String, required: true, validate: requiredStringValidator},
        mediaUrl: { type: String, default: null}
    },
    choices: [{
        text : { type: String, required: true, validate: requiredStringValidator}, 
        response : {
            text: { type: String, required: true, validate: requiredStringValidator}, 
            mediaUrl: {type: String, default: null}        
        }
    }]
})

module.exports = mongoose.model( 'Challenge', challengeSchema )
