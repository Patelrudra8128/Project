const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const postSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true
    },
    createdby : {
        type : String,
        required : true
    },
    active : {
        type : String,
        required : true
    },
    geolocation : {
        type : String,
        required : true
    }
});
const post = mongoose.model('post',postSchema);
module.exports = post;