const { default: mongoose } = require('mongoose');
const mongose = require('mongoose');

let categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Nama category harus ada"]
    }
});

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;