//Script for HTML5 Support
document.createElement('header');
document.createElement('section');
document.createElement('article');
document.createElement('aside');
document.createElement('nav');
document.createElement('footer');

$(document).ready(function() {
    //Input Add-on Focus
    $(".input-group > input").focus(function(e){
        $(this).parent().addClass("input-group-focus");
    }).blur(function(e){
        $(this).parent().removeClass("input-group-focus");
    });
    //Close Login Panel
    $('.close-panel').click(function(e){
        $('.panel').addClass("hidden");
    })

    //Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    //DropDown Hover
    $('.dropdown').hover(function(){
        $('.dropdown-toggle', this).trigger('click');
    });

    //Placeholder
    $('input,textarea').focus(function(){
        $(this).data('placeholder',$(this).attr('placeholder'))
        $(this).attr('placeholder','');
    });
    $('input,textarea').blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });


});

