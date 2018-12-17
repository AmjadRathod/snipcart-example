Snipcart.subscribe('cart.opened', function() {
  Snipcart.appView.setTitle('');
  $('#snipcart-title').append('<img src="https://reliaprint.co.uk/ajayx/img/logo2X.jpeg" alt="Reliaprint.co.uk">');
  var user = Snipcart.api.user.current();
  if (user) {
    $('.snip-header__user-text').text("Signed-in as : " + user['email'])
    $(".snipcart-user-profile").click(function() {
      Snipcart.settings.onlyAllowGuests = false;
    });
  }
  var email_width = $('.snip-header__user-text').width();
  $('.snipcart-user-logout').css({
    "left": email_width + 40
  });
  if (window.matchMedia('(max-width: 767px)').matches) {
        $('.snipcart-user-logout').css({
        "left": email_width + 32 });
      }
});

$(document).ready(function() {
  Snipcart.api.cart.currency('gbp');
  var checkout = Snipcart.appView.getActiveStep();
  var txtName="",txtCompany="",txtEmail="",txtAddress1="",txtAddress2="",txtCity="",txtPostCode="";
  $('#snipcart-title').text('aa');
  if (checkout == 'checkout') {
    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    $('#snipcart-show-discount-box').attr('id', 'newId');
  }
  Snipcart.subscribe('item.removed', function (item) {
 var total = $('#snipcart-amount').text();
$('#snipcart-items-list #snipcart-header-total #snipcart-amount').text(total);
if (Snipcart.cartIsEmpty()) {
      $('.sub-title').remove();
      $('.sub-title').css({"display":"none", "visiblity":"hidden"});
    }
  });
  Snipcart.subscribe('page.changed', function(page) {
    $("#snipcart-header").append('<p class="sub-title">YOUR CART for approval</p>');

    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    $('.sub-title').remove();
    $("#snipcart-header").append('<p class="sub-title">YOUR CART for approval</p>');
    $("#snipcart-current-user").insertAfter('#snipcart-header');

    var user = Snipcart.api.user.current();
    if (user) {
      $('.snip-header__user-text').text("Signed-in as : " + user['email'])
      $(".snipcart-user-profile").click(function() {
        Snipcart.settings.onlyAllowGuests = false;
      });
    }
    Snipcart.appView.setTitle('');
    $('#snipcart-title img').remove();
    $('#snipcart-title').append('<img src="https://reliaprint.co.uk/ajayx/img/logo2X.jpeg" alt="Reliaprint.co.uk">');
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
      $("#snipcart-discounts .snip-actions").append('<div id="snipcart-current-user"><div class="snip-header__user signup"><a href="#" class="snipcart-user-profile"><span class="snipcart-user-email">I&#39;M A MEMBER</span></a></div></div>');

      $('.snipcart-user-logout').remove();
      $("#snipcart-current-user").append('<a href="#" class="snipcart-user-logout">(logout & empty cart)</a>');
      $("#snipcart-actions").append('<a id="snipcart-cartitems-continue-top" class="snip-btn snip-header__continue">&lt;&lt; Add another Order</a>');
      var email_width = $('.snip-header__user-text').width();
      $('.snipcart-user-logout').css({
        "left": email_width + 40 });
      if (window.matchMedia('(max-width: 767px)').matches) {
        $('.snipcart-user-logout').css({
        "left": email_width + 32 });
      }
      $("#snipcart-items-list").last().append('<div id="snipcart-header-total" class="snip-header__total"><span class="snip-header__total-label">ORDER TOTAL:</span><span id="snipcart-amount"></span></div>');
      $('#snipcart-actions .js-next').text("Let's Go >>");
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
    } else {
      $('#snipcart-cartitems-continue-top').css({
        "display": "none"
      });
    }
    if (page == 'login') {
      $('.sub-title').text(' ');
    }
    if (page == 'billing-address') {
        $("input[type='text']").attr('value','');
        $("#snip-name").first().focus();
        $(".snipcart-user-logout").css({
          "visibility": "hidden"
        });
        var email_width = $('.snip-header__user-text').width();
          $('.snipcart-user-logout').css({
            "left": email_width
          });
      $('#snipcart-next').prop('id','snipcart-next-submitt');
      $('#snip-name').prop('required',true);
      $('#snip-address1').prop('required',true);
      $('#snip-city').prop('required',true);
      $('#snip-postalCode').prop('required',true);
      $('#snip-email').prop('type', 'email');
      $('#snip-email').prop('required',true);
      $('#snipcart-next-submitt').click(function(){
        $("#snipcart-billingaddress-form .snip-actions input[type='submit']").trigger("click");
      });
      $('<span class="required-filed-lable">  [REQUIRED]</span>').insertAfter('#snipcart-billingaddress-form div [data-for="name"] label');
      $('<span class="required-filed-lable">  [REQUIRED]</span>').insertAfter('#snipcart-billingaddress-form div [data-for="email"] label');
      $('<span class="required-filed-lable">  [REQUIRED]</span>').insertAfter('#snipcart-billingaddress-form div [data-for="address1"] label');
      $('<span class="required-filed-lable">  [REQUIRED]</span>').insertAfter('#snipcart-billingaddress-form div [data-for="city"] label');
      $('<span class="required-filed-lable">  [REQUIRED]</span>').insertAfter('#snipcart-billingaddress-form div [data-for="postalCode"] label');

      $('div [data-for="shippingSameAsBilling"]').insertBefore('div [data-for="name"]');
      $('div [data-for="country"]').insertAfter('div [data-for="city"]');
      $('div [data-for="postalCode"]').insertAfter('div [data-for="country"]');
      $('div [data-for="province"]').insertAfter('div [data-for="phone"]');
      $('div [data-for="email"]').insertAfter('div [data-for="name"]');
      $('#snipcart-billingaddress-form .snipcart-checkbox-field label').text('DELIVERY ADDRESS same as INVOICE ADDRESS');
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-previous').css({
        "background": "brown",
        "color": "yellow"
      });
      $('#snipcart-next-submitt').text('Continue >>');
      $('#snipcart-next').css({
        "background": "blue",
        "color": "yellow"
      });
      $('#snipcart-previous').css({
        "background": "blue",
        "color": "yellow"
      });
      $('.sub-title').text('Where do we deliver:');
      //remove
      $('#snipcart-billingaddress-form div [data-for="province"] input').remove();
      $('#snipcart-billingaddress-form div [data-for="province"]').append('<textarea rows="6" cols="50" id="snip-province" name="province" value="" class="snipcart-state"></textarea>');
      $('#snipcart-billingaddress-form div [data-for="country"] select').remove();
      $('#snipcart-billingaddress-form div [data-for="country"]').append('<input type="text" id="snip-country" name="country" class="snipcart-country">');

      // lable text
      $("#snipcart-billingaddress-form label[for='snip-name']").text('YOUR NAME :  ');
      $("#snipcart-billingaddress-form label[for='snip-company']").text('COMPANY or ORGANISATION NAME :  ');
      $("#snipcart-billingaddress-form label[for='snip-phone']").text('YOUR PHONE NUMBER (optional) :');
      $("#snipcart-billingaddress-form label[for='snip-address1']").text('ADDRESS LINE 1 :  ');
      $("#snipcart-billingaddress-form label[for='snip-address2']").text('ADDRESS LINE 2 :  ');
      $("#snipcart-billingaddress-form label[for='snip-country']").text('COUNTY (optional) :');
      $("#snipcart-billingaddress-form label[for='snip-city']").text('TOWN / CITY :  ');
      $("#snipcart-billingaddress-form label[for='snip-postalCode']").text('POSTCODE :  ');
      $("#snipcart-billingaddress-form label[for='snip-email']").text('YOUR EMAIL ADDRESS :  ');
      $("#snipcart-billingaddress-form label[for='snip-province']").text('ANY SPECIAL DELIVERY INSTRUCTIONS :');
      $("#snipcart-next-submitt").hover(function(){
        txtName = $("#snipcart-billingaddress-form #snip-name").val();
        txtCompany = $("#snipcart-billingaddress-form #snip-company").val();
        txtAddress1 = $("#snipcart-billingaddress-form #snip-address1").val();
        txtAddress2 = $("#snipcart-billingaddress-form #snip-address2").val();
        txtEmail = $("#snipcart-billingaddress-form #snip-email").val();
        txtCity = $("#snipcart-billingaddress-form #snip-city").val();
        txtPostCode = $("#snipcart-billingaddress-form #snip-postalCode").val();
        }, function(){

      });
    }
    if (page == 'forgot-password') {
        $('.sub-title').remove();
        $('#snipcart-forgotpassword-back-btn').prop("id", "snipcart-forgotpassword-back-btn-2");
        $("#snipcart-forgotpassword-back-btn-2").click(function(){
          var curUrl = window.location.href;
          var dir = '#!/';
          var url = curUrl.split(dir)[0];
          window.location.replace(url + dir + 'cart');
        });
    }

    if (page == 'shipping-address') {
    //   $("input[type='text']").attr('value','');
      $("#snip-name").first().focus();
      $('div [data-for="phone"]').insertAfter('div [data-for="name"]');
      $('div [data-for="province"]').remove();
      $('<div data-for="shippingSameAsBilling" class="snip-form__container snip-form__container--checkbox snipcart-checkbox-field"><input type="checkbox" name="shippingSameAsBilling" id="snip-shippingSameAsBilling" class="snip-product__customfields-checkbox"><label for="snip-shippingSameAsBilling" class="snip-form__label">INVOICE ADDRESS same as DELIVERY ADDRESS</label></div>').insertBefore('div [data-for="name"]');

      $('#snipcart-shipping-address-form div [data-for="country"] select').remove();
      $('#snipcart-shipping-address-form div [data-for="country"]').append('<input type="text" id="snip-country" name="country" class="snipcart-country">');
      $('<span class="required-filed-lable">  [REQUIRED]</span>').insertAfter('#snipcart-shipping-address-form div [data-for="name"] label');
      $('<span class="required-filed-lable">  [REQUIRED]</span>').insertAfter('#snipcart-shipping-address-form div [data-for="phone"] label');


    //   $('div [data-for="country"]').insertAfter('div [data-for="address2"]');
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
      $('#snipcart-next').prop('id','snipcart-next-submitt');
      $('#snip-name').prop('required',true);
      $('#snip-phone').prop('type', 'email');
      $('#snip-phone').prop('required',true);
      $('#snipcart-next-submitt').click(function(){
        $("#snipcart-shipping-address-form .snip-actions input[type='submit']").trigger("click");
      });
      $('.sub-title').text('Invoice Address');
      // lable text
      $("#snipcart-shipping-address-form label[for='snip-name']").text('INVOICE TO :  ');
      $("#snipcart-shipping-address-form label[for='snip-company']").text('COMPANY or ORGANISATION NAME (optional) :');
      $("#snipcart-shipping-address-form label[for='snip-address1']").text('INVOICE ADDRESS LINE 1 :');
      $("#snipcart-shipping-address-form label[for='snip-address2']").text('INVOICE ADDRESS LINE 2 :');
      $("#snipcart-shipping-address-form label[for='snip-country']").text('COUNTY (optional) :');
      $("#snipcart-shipping-address-form label[for='snip-city']").text('TOWN CITY :');
      $("#snipcart-shipping-address-form label[for='snip-postalCode']").text('INVOICE POSTCODE :');
      $('#snip-layout-shipping-address label[for="snip-phone"]').text("INVOICE EMAIL ADDRESS :  ");
      $('#snip-layout-shipping-address #snip-shippingSameAsBilling').click(function() {
        if ($(this).prop('checked') == true) {
          $("#snipcart-shipping-address-form #snip-name").val(txtName);
          $("#snipcart-shipping-address-form #snip-company").val(txtCompany);
          $("#snipcart-shipping-address-form #snip-address1").val(txtAddress1);
          $("#snipcart-shipping-address-form #snip-address2").val(txtAddress2);
          $("#snipcart-shipping-address-form #snip-phone").val(txtEmail);
          $("#snipcart-shipping-address-form #snip-city").val(txtCity);
          $("#snipcart-shipping-address-form #snip-postalCode").val(txtPostCode);
          $("#snipcart-next-submitt").trigger("click");
        }
      });
    }

    if (page == 'payment-method') {
        // $("input[type='text']").attr('value','');
      $('#snipcart-paymentmethod-pay').prop('id','snipcart-paymentmethod-payy');
      $('#snip-ownerName').prop('required',true);
      $('#snip-number').prop('required',true);
      $('#snip-cvc').prop('required',true);
      $('#snipcart-paymentmethod-payy').click(function(){
        $("#snip-layout-payment-method .snip-actions input[type='submit']").trigger("click");
      });
      $('#snipcart-previous').text('<< Go Back');
      $('#snipcart-previous').css({
        "background": "brown",
        "color": "yellow"
      });
      $('#snipcart-paymentmethod-payy').text('Continue >>');
      $('#snipcart-paymentmethod-payy').css({
        "background": "blue",
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
      $('.sub-title').text('Shipping Method');
    }
    if (page == 'login') {
    $('#snipcart-login-forgotpassword-link').text("I forgot my password (or would like to change it)");
  $("#snipcart-login-form-container form").append('<a href="#" id="snipcart-login-cancel" class="snip-btn snip-btn--full">Cancel</a>');
      $("#snipcart-login-cancel").click(function() {
        var curUrl = window.location.href;
        var dir = '#!/';
        var url = curUrl.split(dir)[0];
        window.location.replace(url + dir + 'cart');
      });
    }
    if (page == 'order-confirm') {
        $('.sub-title').css("padding-top","70px");
        $('.sub-title').text('Confirm Order');
        $('#snip-layout-order-confirm .js-submit').text('Place order now');
      $('#snip-layout-order-confirm .js-submit').css({
        "background": "#C70039",
        "color": "yellow"
      });
      $('#snip-layout-order-confirm .js-back').text('<< Go Back');
      $('#snip-layout-order-confirm .js-back').css({
        "background": "brown",
        "color": "yellow"
      });
    }
    if (page == 'order-details') {
      // window.location.replace('../success/');

    }
    if (page == 'empty-cart') {
      Snipcart.appView.close();
    }
  });
});
var invoiceNumber = "";
Snipcart.subscribe('order.completed', function (data){
  invoiceNumber = console.log(data['invoiceNumber']);
});
Snipcart.execute('bind', 'order.completed', function (order) {
  var url = '/snipcart-example/sucess/?order=' + invoiceNumber;
  window.location.href = url;
});
