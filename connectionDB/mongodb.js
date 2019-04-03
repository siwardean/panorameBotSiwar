//  MongoDB connection 

console.log(JSON.stringify(process.env, null, 2));

const mongoose = require('mongoose')

//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
mongoose.connect('mongodb://localhost:27017/panoradb', { useNewUrlParser: true })

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
	console.log('Connected to MongoDB')
})