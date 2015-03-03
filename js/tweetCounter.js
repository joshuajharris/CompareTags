var Twitter = require('twitter'); 


var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var tagsToTrack = ['cat', 'dog'];
var params = { track: tagsToTrack.join() };

client.stream('statuses/filter', params, function(stream){
    stream.on('data', function(tweet){
        var hashtags = tweet.entities.hashtags;
        if(hashtags.length > 0) {
            parseTags(hashtags);
        }
    });

    stream.on('error', console.error);
    stream.on('end', function(){ console.log('----------Closing stream-----------'); });
});

function parseTags(hashtags){
   hashtags.forEach(function(hashtag){
        tagsToTrack.forEach(function(tag){
            if(hashtag.text.toLowerCase().indexOf(tag) > -1)
                console.log(tag + ' +1', hashtag.text);
        });
    }); 
};
