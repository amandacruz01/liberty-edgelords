'use strict';


var meme_list = [];
var Meme = function(meme) {
    this.image = meme.image;
    this.title = meme.title;
    this.month = meme.month;
    this.year = meme.year;
    this.description = meme.description;
    this.categories = meme.categories;
    this.meme_id = meme.meme_id;
};
Meme.prototype.toHtml = function(){
    var source = $('#meme-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};
meme.forEach(function(meme){
    meme_list.push(new Meme(meme));
});

meme_list.forEach(function(meme){
    $('#meme-listings').append(meme.toHtml());
});