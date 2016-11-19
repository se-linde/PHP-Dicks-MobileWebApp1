// This is the javascript that makes the 
// front menu expand and collapse. 

$(document).ready(function(){
    $(‘li’).click(function(){
        $(this).children(‘ul’).toggle();
    });
});