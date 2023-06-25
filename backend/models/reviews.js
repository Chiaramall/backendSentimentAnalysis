const mongoose=require('mongoose')


const ReviewSchema=mongoose.Schema({
    movieId: Number,
    title: String,
    director: String,
    img: String,
    tweets: [{type:mongoose.Schema.Types.ObjectId, ref:'Tweet'}]
})
module.exports=mongoose.model('Review', ReviewSchema)