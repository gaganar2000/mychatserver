const mongoose = require("mongoose");
const connection = mongoose.connect('mongodb://localhost/michat', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('could not connect to MongoDb:27017',err));
mongoose.set('useCreateIndex',true);

module.exports = [].concat(connection);