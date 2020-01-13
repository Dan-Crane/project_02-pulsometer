$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 700,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"></button>'
    });


    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });


    function toggleSlide(item) {
        $(item).each(function(i){
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }


    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

// modal
    $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn(150);
    });
// close
    $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #order, #thanks').fadeOut(150);
    });
//order
    $('.button_mini').each(function(i){
        $(this).on('click', function(){
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn(150);
        });
    });


    //validate forms
    function validateForms(form){
        $(form).validate({
            debug: true,
            rules:{
                name: {
                    required: true,
                    minlength: 2
                },
                phone: 'required',
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, ведите свое имя.",
                    minlength: jQuery.validator.format("Имя должго иметь минимум {0} знака!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, ведите свою почту.",
                  email: "Неправильно введен адрес почты"
                }
              }
        });
    };

    validateForms("#consultation-form");
    validateForms("#consultation form");
    validateForms("#order form");

    //mask forms
    $('input[name=phone]').mask("+7-(999)-999-99-99");
}); 
