//
// $(document).ready(function(){
//   if ($('body').hasClass('snip-open')) {
//     Snipcart.execute('bind', 'cart.opened', function() {
//       $( ".site_logo" ).remove();
//       $( ".singup" ).remove();
//       Snipcart.execute('unbind', 'cart.opened');
//       var user_login = $("#user-login").html();
//       $(user_login).insertBefore($("#snipcart-actions"));
//       var user_logout = $("#user-logout").html();
//       $(user_logout).insertAfter($("#snipcart-current-user"));
//       // var user_name = $("#user-profile-infoo").html();
//       // $(user_name).insertBefore($("#snipcart-header"));
//       // var continue_btn = $("#continue_btn").html();
//       // $(continue_btn).insertBefore($("#snipcart-footer"));
//       // var user_pro = $("#user-profile-info").html();
//       // $(user_pro).insertBefore($("#snipcart-header"));
//       // var add_order = $("#add_order").html();
//       // $(add_order).insertAfter($("#snipcart-actions"));
//       var user = $('.snip-header__user-mail').text();
//       if (user == "") {
//         $('#snipcart-current-user-login').css("display", "block");
//         $('#snipcart-current-user').css("display", "none");
//       }
//       else {
//         $('#snipcart-current-user-login').css("display", "none");
//         $('#snipcart-current-user').css("display", "block");
//       }
//     });
//   }
//   else {
//     $( ".site_logo" ).remove();
//   }
//     Snipcart.subscribe('page.changed', function (page) {
//     if (page == 'order-confirm') {
//       $( ".js-submit" ).trigger( "click" );
//       console.log('click');
//     }
//     if (page == 'billing-address') {
//       $( "#snipcart-current-user" ).css( {"left": "unset", "right": "0", "top": "0"} );
//       $( "#snipcart-header-total" ).css( {"display": "none"} );
//       $( ".snipcart-user-logout" ).css( {"display": "none"} );
//       $( "#snipcart-current-user .logout-user" ).css( {"display": "none"} );
//       $( ".logout-user" ).css( {"display": "none"} );
//       $( "#snipcart-title::before" ).css( {"content": "Where", "text-transform": "capitalize"} );
//       $( "#snipcart-title" ).text('Where do we deliver');
//       $( "#snipcart-title::after" ).css( {"content": "do we deliver"} );
//     }
//     if (page == 'shipping-address') {
//       $( "#snipcart-title::before" ).css( {"content": "Invoice Address", "text-transform": "capitalize"} );
//     }
//     if (page == 'payment-method') {
//       $( "#snipcart-title::before" ).css( {"content": "payment method", "text-transform": "capitalize"} );
//     }
//     if (page == 'cart-content') {
//         Snipcart.execute('bind', 'cart.opened', function() {
//         Snipcart.execute('unbind', 'cart.opened');
//         var user_login = $("#user-login").html();
//         $(user_login).insertBefore($("#snipcart-actions"));
//         var user_logout = $("#user-logout").html();
//         $(user_logout).insertAfter($("#snipcart-current-user"));
//         var user_name = $("#user-profile-infoo").html();
//         $(user_name).insertBefore($("#snipcart-header"));
//         var continue_btn = $("#continue_btn").html();
//         $(continue_btn).insertBefore($("#snipcart-footer"));
//         var site_logo = $("#site-logo").html();
//         $(site_logo).insertBefore($("#snipcart-title"));
//         var user_pro = $("#user-profile-info").html();
//         $(user_pro).insertBefore($("#snipcart-header"));
//         var add_order = $("#add_order").html();
//         $(add_order).insertAfter($("#snipcart-actions"));
//         var user = $('.snip-header__user-mail').text();
//         if (user == "") {
//           $('#snipcart-current-user-login').css("display", "block");
//           $('#snipcart-current-user').css("display", "none");
//         }
//         else {
//           var add_logout = $("#logout_user").html();
//           $(add_logout).insertAfter($(".snip-header__user-text"));
//           $('#snipcart-current-user-login').css("display", "none");
//           $('#snipcart-current-user').css("display", "block");
//         }
//         $('#snipcart-header-total').insertBefore('#snipcart-actions');
//         $( "#snipcart-current-user" ).css( {"left": "28px", "right": "unset", "top": "75px"} );
//         $( "#snipcart-title::before" ).css( {"content": "YOUR CART"} );
//         $( "#snipcart-title::after" ).css( {"content": "for approval"} );
//         $('#snipcart-cartitems-continue-top').insertBefore($(".js-next"));
//       });
//       }
//     console.log(page);
//   });
//   $('#dvDemo').attr('id', 'dvDemoNew');
//   $("#snipcart-paymentmethod-pay").click(function(){
//     console.log("hi");
//   });
//   Snipcart.subscribe('authentication.success', function (email) {
//    if (email) {
//      console.log(email);
//    }
//    if (email !== null && email !== undefined) {
//      $( ".logout-user" ).css( {"position": "absolute", "left": "285px", "top": "85px"} );
//      $( ".singup" ).css( {"display": "none"} );
//      console.log(email);
//    }
// });
//   $("#control-qid13228").click();
// });
document.addEventListener('snipcart.ready', function() {
  // $('#snipcart-title').text('Reliaprint.co.uk')
  // $('#snipcart-items').append($("#snipcart-header-total"));
});
Snipcart.subscribe('cart.opened', function() {
    console.log('Snipcart popup is visible 2');
    var user = Snipcart.api.user.current();
    if (user) {
      $('.snip-header__user-text').text("Signed-in as : "+ user['email'])
      $( ".snipcart-user-profile" ).click(function() {
        Snipcart.settings.onlyAllowGuests = false;
      });
    }
    var email_width = $('.snip-header__user-text').width();
    $('.snipcart-user-logout').css({"left": email_width + 30});
});
$(document).ready(function(){
  Snipcart.api.cart.currency('gbp');
  var checkout = Snipcart.appView.getActiveStep();
  // $('#snipcart-show-discount-box').attr('id', 'newId');
  if (checkout == 'checkout') {
    Snipcart.appView.setTitle('Reliaprint.co.uk');
    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    $('#snipcart-show-discount-box').attr('id', 'newId');
  }
  Snipcart.subscribe('page.changed', function (page) {
    Snipcart.appView.setTitle('Reliaprint.co.uk');
    $("#snipcart-header").append('<p class="sub-title">YOUR CART for approval</p>');
    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    $('.sub-title').remove();
    $("#snipcart-header").append('<p class="sub-title">YOUR CART for approval</p>');
    var user = Snipcart.api.user.current();
    if (user) {
      $('.snip-header__user-text').text("Signed-in as : "+ user['email'])
      $( ".snipcart-user-profile" ).click(function() {
        Snipcart.settings.onlyAllowGuests = false;
      });
    }
    if (page == 'customer/orders-history') {
      var curUrl = window.location.href;
      var dir = '#!/';
      var url = curUrl.split(dir)[0];
      window.location.replace(url + dir + 'billing-address');
    }
    if (page == 'empty-cart') {
      Snipcart.appView.close();
    }
    if (page == 'cart-content') {
      // Snipcart.settings.onlyAllowGuests = false;
      $("#snipcart-discounts .snip-actions").append('<div><div><a href="#"><span class="accordion">I&#39;M MEMBER</span></a></div></div><div id="snipcart-login-form-container" class="snip-col snip-col--half"><h2 class="snip-static__title">Sign in</h2><form class="snip-static__content" action="login"><div data-for="email" class="snip-form__container snip-form__container--input"><label for="snipcart-login-email" class="snip-form__label">Email</label><input type="text" name="email" id="snipcart-login-email"></div><div data-for="password" class="snip-form__container snip-form__container--input"><label for="snipcart-login-password" class="snip-form__label">Password</label><input type="password" name="password" id="snipcart-login-password"></div><a href="#" id="snipcart-login-forgotpassword-link" class="snip-static__link">I forgot my password</a><a href="#" id="snipcart-login-submit" class="snip-btn snip-btn--full">Log in</a><button type="submit" style="display: none"></button></form></div>');
      $( ".accordion" ).click(function() {
        if ($('#snipcart-login-form-container').hasClass('active')) {
          $('#snipcart-login-form-container').css({"display": "block"})
          $('#snipcart-login-form-container').removeClass("active");
        }
        else {
          $('#snipcart-login-form-container').css({"display": "none"});
          $('#snipcart-login-form-container').addClass("active");
        }
      });
      console.log('login');

      $('.snipcart-user-logout').remove();
      $("#snipcart-current-user").append('<a href="#" class="snipcart-user-logout">(logout/change)</a>');
      $("#snipcart-actions").append('<a id="snipcart-cartitems-continue-top" class="snip-btn snip-header__continue">&lt;&lt; Add another Order</a>');
      var email_width = $('.snip-header__user-text').width();
      $('.snipcart-user-logout').css({"left": email_width + 30});

      $("#snipcart-items-list").last().append('<div id="snipcart-header-total" class="snip-header__total"><span class="snip-header__total-label">ORDER TOTAL:</span><span id="snipcart-amount"></span></div>');
      $('#snipcart-actions .js-next').text('DELIVERY >>');
      var total = $('#snipcart-amount').text();
      $('#snipcart-items-list #snipcart-header-total #snipcart-amount').text(total);
      var user = Snipcart.api.user.current();
      if (user) {
        $('.snip-header__user-text').text("Signed-in as : "+ user['email'])
        $( ".snipcart-user-profile" ).click(function() {
          Snipcart.settings.onlyAllowGuests = false;
        });
      }

      if (Snipcart.currentUser) {
        $( ".snipcart-user-profile" ).css({"visibility": "hidden"});
        $( ".snipcart-user-logout" ).css({"visibility": "visible"});
      }
      else {
        $( ".snipcart-user-profile" ).css({"visibility": "visible"});
        $( ".snipcart-user-logout" ).css({"visibility": "hidden"});
      }
      console.log('amjad');
      // $('#snipcart-show-discount-box').attr('id', 'newId');
    }
    else {
      $('#snipcart-cartitems-continue-top').css({"display": "none"});
    }
    if (page == 'login') {
      $('.sub-title').text(' ');
    }
    if (page == 'billing-address') {

      $('#snipcart-billingaddress-form .snipcart-checkbox-field label').text('DELIVERY ADDRESS same as INVOICE ADDRESS');
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-previous').css({"background": "brown", "color": "yellow"});
      $('#snipcart-next').text('Continue >>');
      $('#snipcart-next').css({"background": "blue", "color": "yellow"});
      $('#snipcart-previous').css({"background": "blue", "color": "yellow"});
      $('.sub-title').text('Where do we deliver:');
      // lable text
      $("#snipcart-billingaddress-form label[for='snip-name']").text('YOUR NAME :');
      $("#snipcart-billingaddress-form label[for='snip-company']").text('COMPANY or ORGANISATION NAME :');
      $("#snipcart-billingaddress-form label[for='snip-phone']").text('YOUR PHONE NUMBER (optional) :');
      $("#snipcart-billingaddress-form label[for='snip-address1']").text('ADDRESS LINE 1* :');
      $("#snipcart-billingaddress-form label[for='snip-address2']").text('ADDRESS LINE 2 :');
      $("#snipcart-billingaddress-form label[for='snip-country']").text('COUNTRY (optional) :');
      $("#snipcart-billingaddress-form label[for='snip-city']").text('TOWN CITY* :');
      $("#snipcart-billingaddress-form label[for='snip-postalCode']").text('POSTCODE* :');
      $("#snipcart-billingaddress-form label[for='snip-email']").text('YOUR EMAIL ADDRESS* :');
      $("#snipcart-billingaddress-form label[for='snip-province']").text('ANY SPECIAL DELIVERY INSTRUCTIONS :');
    }

    if (page == 'shipping-address') {

      // $('#snipcart-shipping-address-form .snipcart-checkbox-field label').text('DELIVERY ADDRESS same as INVOICE ADDRESS');
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-previous').css({"background": "brown", "color": "yellow"});
      $('#snipcart-next').text('Continue >>');
      $('#snipcart-next').css({"background": "blue", "color": "yellow"});
      $('#snipcart-previous').css({"background": "blue", "color": "yellow"});
      $('.sub-title').text('Invoice Address');
      // lable text
      $("#snipcart-shipping-address-form label[for='snip-name']").text('INVOICE TO :');
      $("#snipcart-shipping-address-form label[for='snip-company']").text('COMPANY or ORGANISATION NAME (optional) :');
      $("#snipcart-shipping-address-form label[for='snip-phone']").text('YOUR PHONE NUMBER (optional) :');
      $("#snipcart-shipping-address-form label[for='snip-address1']").text('INVOICE ADDRESS LINE 1* :');
      $("#snipcart-shipping-address-form label[for='snip-address2']").text('INVOICE ADDRESS LINE 2 :');
      $("#snipcart-shipping-address-form label[for='snip-country']").text('COUNTRY (optional) :');
      $("#snipcart-shipping-address-form label[for='snip-city']").text('TOWN CITY* :');
      $("#snipcart-shipping-address-form label[for='snip-postalCode']").text('INVOICE POSTCODE* :');
      // $("#snipcart-shipping-address-form label[for='snip-email']").text('YOUR EMAIL ADDRESS* :');
      // $("#snipcart-shipping-address-form label[for='snip-province']").text('ANY SPECIAL DELIVERY INSTRUCTIONS :');
    }

    if (page == 'payment-method') {
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-previous').css({"background": "brown", "color": "yellow"});
      $('#snipcart-paymentmethod-pay').text('PLACE ORDER');
      $('#snipcart-paymentmethod-pay').css({"background": "#F27746", "color": "yellow"});
      $('.sub-title').text('Payment Method');
      $('.snip-product').css({"display": "none"});
    }
    if (page == 'order-confirm') {
      $( ".js-submit" ).trigger( "click" );
      console.log('click');
    }
      console.log(page);
  });
});
