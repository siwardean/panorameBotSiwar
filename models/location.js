const mongoose = require("mongoose")

const requiredStringValidator = [
	function (val) {
		let testVal = val.trim()
		return (testVal.length > 0)
	},
	// Custom error text
	'Please supply a value for {PATH}'	
]

const locationSchema = new mongoose.Schema({
    location : {type: String, required: true, validate: requiredStringValidator},
    
    // Est-ce que je dois spécifier les challenges dans le schema ici sachant 
    // que c'est référencé dans scenario après ?
    /* 
    challenges : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge',
    }],
     */
    scenarios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scenario',
    }]
})

module.exports = mongoose.model( 'Location', locationSchema )
