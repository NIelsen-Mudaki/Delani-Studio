$(document).ready(function(){
    $('.design').click(function(){
        $('#des-showing-design').toggle();
        $('#des-hidden-design').toggle();
    });

    $('.development').click(function(){
        $('#des-showing-development').toggle();
        $('#des-hidden-development').toggle();
    });

    $('.product-management').click(function(){
        $('#des-showing-product-management').toggle();
        $('#des-hidden-product-management').toggle();
    });


    $('#portfolio-icon img').hover(function(){
        $(this).animate({'zoom': 1.2}, 'slow');

        $(this).animate({'zoom': 1}, 'slow');

    });
});