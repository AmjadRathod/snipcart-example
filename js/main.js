
$(document).ready(function(){
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
      $( "#snip-header__title::before" ).css( {"content": "Where", "text-transform": "capitalize"} );
      $( "#snip-header__title::after" ).css( {"content": "do we deliver"} );
    }
    if (page == 'shipping-address') {
      $( "#snip-header__title:before" ).css( {"content": "Invoice Address", "text-transform": "capitalize"} );
    }
    if (page == 'payment-method') {
      $( "#snip-header__title::before" ).css( {"content": "payment method", "text-transform": "capitalize"} );
    }
    if (page == 'cart-content') {
      Snipcart.execute('bind', 'cart.opened', function() {
        Snipcart.execute('unbind', 'cart.opened');
        var html = $("#cart-content-text").html();
        $(html).insertBefore($("#snipcart-cartitems-continue-top"));
        var user_login = $("#user-login").html();
        $(user_login).insertBefore($("#snipcart-actions"));
        var user_logout = $("#user-logout").html();
        $(user_logout).insertAfter($("#snipcart-current-user"));
        var user_name = $("#user-profile-infoo").html();
        $(user_name).insertBefore($("#snipcart-header"));
        var continue_btn = $("#continue_btn").html();
        $(continue_btn).insertBefore($("#snipcart-footer"));
        var site_logo = $("#site-logo").html();
        $(site_logo).insertBefore($("#snipcart-title"));
        var user_pro = $("#user-profile-info").html();
        $(user_pro).insertBefore($("#snipcart-header"));
        var add_order = $("#add_order").html();
        $(add_order).insertAfter($("#snipcart-actions"));
      });
      $('#snipcart-header-total').insertBefore('#snipcart-actions');
      $( "#snipcart-current-user" ).css( {"left": "28px", "right": "unset", "top": "75px"} );
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
