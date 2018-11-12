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
<<<<<<< HEAD
        var liTag = `<li>${category}</li>`;
        $('#categories').append(liTag);
=======
        var optionTag = `<option value="${category}">${category}</option>`;
        $('#category-filter').append(optionTag);
>>>>>>> 5149b0574b399f8dd481ce20326f9f79113485f8
    });
};

setUpCategoryFilter();
<<<<<<< HEAD

function handleCategoryFilter() {
    $('#categories').on('change', function() {
=======
function handleCategoryFilter() {
    $('#category-filter').on('change', function() {
>>>>>>> 5149b0574b399f8dd481ce20326f9f79113485f8
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