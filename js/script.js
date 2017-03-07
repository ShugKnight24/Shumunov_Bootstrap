$(document).ready(function(){

    $('[data-toggle="tooltip"]').tooltip();

    $('.money-buttons').on('click', function(){

        if ($('#payment').hasClass('hide-payment')){

            $('#payment').removeClass('hide-payment');

            $('body,html').animate({
                scrollTop: $("#payment").offset().top
            }, 600);

        } else {

            $('#payment').addClass('hide-payment');

            $('body,html').animate({
                scrollTop: $(".money-buttons").offset().top
            }, 600);

        }

    });

});
