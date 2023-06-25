const mongoose=require('mongoose')

const TweetSchema =  mongoose.Schema({
    text: String,
    author:String,
    positive: Number,
    negative: Number,
    neutral: Number
});

module.exports=mongoose.model('Tweet', TweetSchema)