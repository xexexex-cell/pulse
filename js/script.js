// $(document).ready(function() {
//     // Modal

//     $('[data-modal=consultation]').on('click', function() {
//         $('.overlay, #consultation').fadeIn('slow');
//     });
//     $('.modal__close').on('click', function() {
//         $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
//     });

//     $('.button_mini').each(function(i) {
//         $(this).on('click', function() {
//             $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
//             $('.overlay, #order').fadeIn('slow');
//         });
//     });

//     function validateForms(form) {
//         $(form).validate({
//             rules: {
//                 name: {
//                     required: true,
//                     minlength: 2
//                 },
//                 phone: "required",
//                 email: {
//                     required: true,
//                     email: true
//                 }
//             },
//             messages: {
//                 name: {
//                     required: "Пожалуйста, введите свое имя",
//                     minlength: jQuery.validator.format("Введите {0} символа!")
//                 },
//                 phone: "Пожалуйста, введите свой номер телефона",
//                 email: {
//                     required: "Пожалуйста, введите свою почту",
//                     email: "Неправильно введен адрес почты"
//                 }
//             }
//         });
//     }

//     validateForms('#consultation-form');
//     validateForms('#consultation form');
//     validateForms('#order form');

//     $('input[name=phone]').mask("+7 (999) 999-99-99");

//     $('form').submit(function(e) {
//         e.preventDefault();
//         const form = $(this);
//         $.ajax({
//             type: "POST",
//             url: "mailer/smart.php",
//             data: form.serialize()
//         }).done(function() {
//             form.find("input").val("");
//             $('#consultation, #order').fadeOut();
//             $('.overlay, #thanks').fadeIn('slow');
//             form.trigger('reset');
//         });
//         return false;
//     });

//     // Smooth scroll and pageup

//     $(window).scroll(function() {
//         if ($(this).scrollTop() > 1600) {
//             $('.pageup').fadeIn();
//         } else {
//             $('.pageup').fadeOut();
//         }
//     });

//     $("a[href^='#']").click(function() {
//         const _href = $(this).attr("href");
//         $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
//         return false;
//     });

//     new WOW().init();
// });
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// Для другого модального вікна
const secondModal = new bootstrap.Modal(document.getElementById('secondModal'));
const secondModalTrigger = document.getElementById('secondModalTrigger');

secondModalTrigger.addEventListener('click', () => {
  secondModal.show();
});
// Для 3 модального вікна
const thirdModal = new bootstrap.Modal(document.getElementById('thirdModal'));
const thirdModalTrigger = document.getElementById('thirdModalTrigger');

thirdModalTrigger.addEventListener('click', () => {
  thirdModal.show();
});