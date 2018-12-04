document.addEventListener('snipcart.ready', function() {
  // $('#snipcart-title').text('Reliaprint.co.uk')
  // $('#snipcart-items').append($("#snipcart-header-total"));
});
Snipcart.subscribe('cart.opened', function() {
  var user = Snipcart.api.user.current();
  if (user) {
    $('.snip-header__user-text').text("Signed-in as : " + user['email'])
    $(".snipcart-user-profile").click(function() {
      Snipcart.settings.onlyAllowGuests = false;
    });
  }
  var email_width = $('.snip-header__user-text').width();
  $('.snipcart-user-logout').css({
    "left": email_width + 30
  });
});
$(document).ready(function() {
  Snipcart.api.cart.currency('gbp');
  var checkout = Snipcart.appView.getActiveStep();
  // $('#snipcart-show-discount-box').attr('id', 'newId');
  if (checkout == 'checkout') {
    Snipcart.appView.setTitle('Reliaprint.co.uk');
    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    $('#snipcart-show-discount-box').attr('id', 'newId');
  }
  Snipcart.subscribe('page.changed', function(page) {
    Snipcart.appView.setTitle('Reliaprint.co.uk');
    $("#snipcart-header").append('<p class="sub-title">YOUR CART for approval</p>');
    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    $('.sub-title').remove();
    $("#snipcart-header").append('<p class="sub-title">YOUR CART for approval</p>');
    var user = Snipcart.api.user.current();
    if (user) {
      $('.snip-header__user-text').text("Signed-in as : " + user['email'])
      $(".snipcart-user-profile").click(function() {
        Snipcart.settings.onlyAllowGuests = false;
      });
    }
    if (page == 'customer/orders-history') {
      var curUrl = window.location.href;
      var dir = '#!/';
      var url = curUrl.split(dir)[0];
      window.location.replace(url + dir + 'cart');
      console.log('cart Amjad');
    }
    if (page == 'empty-cart') {
      Snipcart.appView.close();
    }
    if (page == 'cart-content') {
      // Snipcart.settings.onlyAllowGuests = false;
      $('#snipcart-items-header tr th:nth-child(5)').text('PRICE');
      $("#snipcart-discounts .snip-actions").append('<div id="snipcart-current-user"><div class="snip-header__user signup"><a href="#" class="snipcart-user-profile"><span class="snipcart-user-email">I&#39;M MEMBER</span></a></div></div>');

      $('.snipcart-user-logout').remove();
      $("#snipcart-current-user").append('<a href="#" class="snipcart-user-logout">(logout/change)</a>');
      $("#snipcart-actions").append('<a id="snipcart-cartitems-continue-top" class="snip-btn snip-header__continue">&lt;&lt; Add another Order</a>');
      var email_width = $('.snip-header__user-text').width();
      $('.snipcart-user-logout').css({
        "left": email_width + 30
      });

      $("#snipcart-items-list").last().append('<div id="snipcart-header-total" class="snip-header__total"><span class="snip-header__total-label">ORDER TOTAL:</span><span id="snipcart-amount"></span></div>');
      $('#snipcart-actions .js-next').text('DELIVERY >>');
      var total = $('#snipcart-amount').text();
      $('#snipcart-items-list #snipcart-header-total #snipcart-amount').text(total);
      var user = Snipcart.api.user.current();
      if (user) {
        $('.snip-header__user-text').text("Signed-in as : " + user['email'])
        $(".snipcart-user-profile").click(function() {
          Snipcart.settings.onlyAllowGuests = false;
        });
      }

      if (Snipcart.currentUser) {
        $(".snipcart-user-profile").css({
          "visibility": "hidden"
        });
        $(".snipcart-user-logout").css({
          "visibility": "visible"
        });
      } else {
        $(".snipcart-user-profile").css({
          "visibility": "visible"
        });
        $(".snipcart-user-logout").css({
          "visibility": "hidden"
        });
      }
      console.log('anb');
      // $('#snipcart-show-discount-box').attr('id', 'newId');
    } else {
      $('#snipcart-cartitems-continue-top').css({
        "display": "none"
      });
    }
    if (page == 'login') {
      $('.sub-title').text(' ');
    }
    if (page == 'billing-address') {
      $('div [data-for="shippingSameAsBilling"]').insertBefore('div [data-for="name"]');
      $('div [data-for="country"]').insertAfter('div [data-for="address2"]');
      $('div [data-for="postalCode"]').insertAfter('div [data-for="city"]');
      $('div [data-for="province"]').insertAfter('div [data-for="email"]');
      $('#snipcart-billingaddress-form .snipcart-checkbox-field label').text('DELIVERY ADDRESS same as INVOICE ADDRESS');
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-previous').css({
        "background": "brown",
        "color": "yellow"
      });
      $('#snipcart-next').text('Continue >>');
      $('#snipcart-next').css({
        "background": "blue",
        "color": "yellow"
      });
      $('#snipcart-previous').css({
        "background": "blue",
        "color": "yellow"
      });
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
      Snipcart.subscribe('page.validating', function(ev, data) {
        if (ev.type == 'shipping-address' && data.phone.substr(5, 15) != '/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;') {
          ev.addError('Email', 'Please enter Valid Email');
        }
      });
      $('div [data-for="phone"]').insertAfter('div [data-for="company"]');
      $('#snip-layout-shipping-address label[for="snip-phone"]').text("INVOICE EMAIL ADDRESS *");
      $('div [data-for="province"]').remove();
      $('<div data-for="shippingSameAsBilling" class="snip-form__container snip-form__container--checkbox snipcart-checkbox-field"><input type="checkbox" name="shippingSameAsBilling" id="snip-shippingSameAsBilling" class="snip-product__customfields-checkbox"><label for="snip-shippingSameAsBilling" class="snip-form__label">INVOICE ADDRESS same as DELIVERY ADDRESS</label></div>').insertBefore('div [data-for="name"]');

      $('div [data-for="country"]').insertAfter('div [data-for="address2"]');
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-previous').css({
        "background": "brown",
        "color": "yellow"
      });
      $('#snipcart-next').text('Continue >>');
      $('#snipcart-next').css({
        "background": "blue",
        "color": "yellow"
      });
      $('#snipcart-previous').css({
        "background": "blue",
        "color": "yellow"
      });
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
      $('#snipcart-previous').css({
        "background": "brown",
        "color": "yellow"
      });
      $('#snipcart-paymentmethod-pay').text('PLACE ORDER');
      $('#snipcart-paymentmethod-pay').css({
        "background": "#F27746",
        "color": "yellow"
      });
      $('.sub-title').text('Payment Method');
      $('.snip-product').css({
        "display": "none",
        "color": "yellow"
      });
    }

    if (page == 'shipping-method') {
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-next').text('Continue >>');
      $("#snipcart-next").css({
        "background": "blue",
      });
    }
    if (page == 'login') {
      $("#snipcart-login-form-container form").append('<a href="#" id="snipcart-login-cancel" class="snip-btn snip-btn--full">Cancel</a>');
      $("#snipcart-login-cancel").click(function() {
        var curUrl = window.location.href;
        var dir = '#!/';
        var url = curUrl.split(dir)[0];
        window.location.replace(url + dir + 'cart');
      });
    }
    if (page == 'order-confirm') {
      $(".js-submit").trigger("click");
    }
    if (page == 'order-details') {
      window.location.replace('/snipcart-example/sucess/');
    }
    if (page == 'empty-cart') {
      Snipcart.appView.close();
    }
    console.log(page);
  });
});
