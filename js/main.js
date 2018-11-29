
$(document).ready(function(){
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var user_login = $("#user-login").html();
    $(user_login).insertBefore($("#snipcart-actions"));
      });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var html = $("#cart-content-text").html();
    $(html).insertBefore($("#snipcart-cartitems-continue-top"));
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var user_pro = $("#user-profile-info").html();
    $(user_pro).insertBefore($("#snipcart-header"));
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var user_name = $("#user-profile-infoo").html();
    $(user_name).insertBefore($("#snipcart-header"));
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var continue_btn = $("#continue_btn").html();
    $(continue_btn).insertBefore($("#snipcart-footer"));
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var user_logout = $("#user-logout").html();
    $(user_logout).insertAfter($("#snipcart-current-user"));
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var site_logo = $("#site-logo").html();
    $(site_logo).insertBefore($("#snipcart-title"));
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var add_order = $("#add_order").html();
    $(add_order).insertAfter($("#snipcart-actions"));
  });
  $(".snipcart-user-profile").click(function(){
    $(this).css({"display": "none"});
    $('.logout-user').css("display": "block");
  });
  $('.logout-user').css("display": "none");
  $(".logout-user").click(function(){
    $(this).css("display": "none");
    $('.snipcart-user-profile').css("display": "block");
  });
  Snipcart.subscribe('page.changed', function (page) {
    if (page == 'order-confirm') {
      $( ".js-submit" ).trigger( "click" );
      console.log('click');
    }
    if (page == 'billing-address') {
      $( "#snipcart-current-user" ).css( {"left": "unset", "right": "0", "top": "0"} );
      $( "#snipcart-header-total" ).css( {"display": "none"} );
      $( ".snipcart-user-logout" ).css( {"display": "none"} );
      $( "#snipcart-current-user .logout-user" ).css( {"display": "none"} );
      $( ".logout-user" ).css( {"display": "none"} );
      $( "#snip-header__title:before" ).css( {"content": "Where", "text-transform": "capitalize"} );
      $( "#snip-header__title:after" ).css( {"content": "do we deliver"} );
    }
    if (page == 'shipping-address') {
      $( "#snip-header__title:before" ).css( {"content": "Invoice Address", "text-transform": "capitalize"} );
    }
    if (page == 'payment-method') {
      $( "#snip-header__title:before" ).css( {"content": "payment method", "text-transform": "capitalize"} );
    }
    if (page == 'cart-content') {

      console.log("bind");
      $( "#snipcart-current-user" ).css( {"left": "28px", "right": "unset", "top": "75px"} );
      $( "#snipcart-header-total" ).css( {"bottom": "-275px", "right": "135"} );
      $( "#snip-header__title:before" ).css( {"content": "YOUR CART"} );
      $( "#snip-header__title:after" ).css( {"content": "for approval"} );
    }
    console.log(page);
  });
  $('#dvDemo').attr('id', 'dvDemoNew');
  $("#snipcart-paymentmethod-pay").click(function(){
    console.log("hi");
  });
  Snipcart.subscribe('authentication.success', function (email) {
   if (email) {
     console.log(email);
   }
   if (email !== null && email !== undefined) {
     $( ".logout-user" ).css( {"position": "absolute", "left": "285px", "top": "85px"} );
     $( ".singup" ).css( {"display": "none"} );
     console.log(email);
   }
   else {
     $( ".logout-user" ).css( {"display": "none"} );
     console.log('hiii');
   }
});
  $("#control-qid13228").click();
});
