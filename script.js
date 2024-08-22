$(document).ready(function () {
    $('.main-accordion').first().find('.accordion-heading').addClass('active');
    $('.main-accordion').first().find('.accordion-content').addClass('active');
    $('.accordion-content').not('.active').hide();

    $('.accordion-heading').on('click', function () {
        $('.accordion-content').removeClass('active').slideUp();
        $('.accordion-heading').removeClass('active');
        if (!$(this).next('.accordion-content').is(':visible')) {
            $(this).next('.accordion-content').slideDown().addClass('active');
            $(this).addClass('active');
        }
    });
});