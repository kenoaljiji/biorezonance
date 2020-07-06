$(document).ready(function() {
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 210) {
            $('.header').addClass('header-sticky');
            $('.hamburger-menu').addClass('hamburger-sticky');
            $('.logo').addClass('logo-sticky');
            $('.logo_box').addClass('logo_box-sticky');
            
        } else {
            $('.header').removeClass('header-sticky');
            $('.hamburger-menu').removeClass('hamburger-sticky');
            $('.logo').removeClass('logo-sticky');
            $('.logo_box').removeClass('logo_box-sticky');
            
        }
        
});

/* Scroll on buttons */

$('.js--scroll-to-book').click(function () {
    $('html, body, .wrapper').animate({scrollTop:$('.js--section-book').offset().top}, 1000); 
 });
 
$('.js--scroll-to-more').click(function () {
    $('html, body, .wrapper').animate({scrollTop:$('.js--find-out').offset().top}, 1000); 
 });

$('.hamburger-menu').click(function() {
    $('.menu').toggleClass('active');
    $('.menu-overlay').toggleClass('active');

});
$('#usluge').click(function() {
    $('.usluge-menu').toggleClass('active');
    $('.usluge-overlay').toggleClass('active');

});
$('.x').click(function() {
    $('.menu').toggleClass('active');
    $('.menu-overlay').toggleClass('active');
});
$('.back').click(function() {
    $('.usluge-menu').toggleClass('active');
    $('.usluge-overlay').toggleClass('active');
});

$('#usluge-header').click(function() {
    $('.header-usluge-top').toggleClass('active');

});
   

});

// Javascript 

const form = document.getElementById('form'),
    username = document.getElementById('name'),
    email = document.getElementById('email'),
    number = document.getElementById('number'),
    submit = document.getElementById('submit');
    let error = [1,2,3];
    
    
  form.addEventListener("submit", function(e) {  

    e.preventDefault();  
    error = [];

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-control error";
        const small = formControl.querySelector("small");
        small.innerText = message;
      }
      
      // Show input success outline
      function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
      }
      
      // Provjeri da li je validan mail
      
      function checkEmail(input) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value.trim())) {
          showSuccess(input);
        } else {
          showError(input, "Email nije validan");
        error.push(1)
        }
      }
      
      // Provjeri obavezna polja
      function checkRequired(inputArr) {
        inputArr.forEach(function(input) {
          if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} je obavezan`);
            error.push(2);
          } else {
            showSuccess(input);
            
          }
        });
      }
      
      function checkLength(input, min) {
        if (input.value.length < min) {
          showError(
            input,
            `${getFieldName(input)} mora sadržavati najmanje ${min} slova`
          );
          error.push(3);}
        else {
          showSuccess(input);
        }
      }
      
      
      //Ime polja
      
      function getFieldName(input) {
        return input.placeholder.charAt(0).toUpperCase() + input.placeholder.slice(1);
      }
      // Event Listener
      
        
        checkRequired([username, email, number]);
        
        checkEmail(email);

        checkLength(username, 6);
          
        
        if(error.length <= 0) {
          form.submit();
        }
        
      });

      

