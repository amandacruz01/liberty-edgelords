'use strict';

function setUpYearFilter() {
    var year;
    var yearList = [];
    $('.meme').each(function() {
        year = $(this).attr('data-year').split(',');
        year.forEach(function(year) {
            if(yearList.indexOf(year) < 0) {
                yearList.push(year);
            }
        });
    });
    yearList.sort();
    yearList.forEach(function(year) {
        var optionTag = `<option value="${year}">${year}</option>`;
        $('#year-filter').append(optionTag);
    });
};

setUpYearFilter();
function handleYearFilter() {
    $('#year-filter').on('change', function() {
        if($(this).val()) {
            $('.meme').hide();
            $(`.meme[data-year*="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.meme').fadeIn();
        }
    });
};

handleYearFilter();