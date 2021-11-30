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


    $('#portfolio-icon img').hover(function(e){

        e.preventDefault();

        $(this).animate({'zoom': 1.2}, 'slow');

        $(this).animate({'zoom': 1}, 'slow');

    });

    var nameInput = $('#name').val();
    var emailInput = $('#email').val();
    var messageInput = $('#message').val();

    $('#name').val('');
    $('#email').val('');
    $('#message').val('');

    $('#submit').click(function(){
        alert('Hello ' + nameInput + ' your message has been received by our team. Thank you for reaching out to us.');
    });
});