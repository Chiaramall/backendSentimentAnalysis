const Review=require('../models/reviews')
const Tweet=require('../models/tweets')


const getReviews = (callback) => {
    Review.find()
        .populate('tweets')
        .then((reviews) => {
            callback(null, reviews);
        })
        .catch((error) => {
            console.log(error);
            callback(error, null);
        });
};

module.exports = {
    getReviews
};