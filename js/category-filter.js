'use strict';

function setUpCategoryFilter() {
    var categories;
    var categoryList = [];
    $('.meme').each(function() {
        categories = $(this).attr('data-categories').split(',');
        categories.forEach(function(category) {
            if(categoryList.indexOf(category) < 0) {
                categoryList.push(category);
            }
        });
    });
    categoryList.sort();
    categoryList.forEach(function(category) {
        var liTag = `<li>${category}</li>`;
        $('#categories').append(liTag);
    });
};

setUpCategoryFilter();

function handleCategoryFilter() {
    $('#categories').on('change', function() {
        if($(this).val()) {
            $('.meme').hide();
            $(`.meme[data-categories*="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.meme').fadeIn();
        }
    });
};

handleCategoryFilter();