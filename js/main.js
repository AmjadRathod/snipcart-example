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
    var snipcart_box_height = $('#snip-layout-cart-content').height();
    $('#snipcart-cartitems-continue-top').css({"top": snipcart_box_height - 55});
    $('#snipcart-cartitems-continue-top').text('<< Add another Order');
    // $('#snipcart-items').append($("#snipcart-header-total"));
});
Snipcart.subscribe('item.removed', function (item) {
  var snipcart_box_height = $('#snip-layout-cart-content').height();
  $('#snipcart-cartitems-continue-top').css({"top": snipcart_box_height - 55});
});
$("#snipcart-items nip-product__remove").click(function(){
  var snipcart_box_height = $('#snip-layout-cart-content').height();
  $('#snipcart-cartitems-continue-top').css({"top": snipcart_box_height - 55});
});
$(document).ready(function(){
  var checkout = Snipcart.appView.getActiveStep();
  $('#snipcart-show-discount-box').attr('id', 'newId');
  if (checkout == 'checkout') {
    Snipcart.appView.setTitle('Reliaprint.co.uk');
    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    $('#snipcart-show-discount-box').attr('id', 'newId');
  }
  Snipcart.subscribe('page.changed', function (page) {
    Snipcart.appView.setTitle('Reliaprint.co.uk <span>abc</span>');
    Snipcart.appView.hideSteps();
    Snipcart.appView.hideLoader();
    if (page == 'cart-content') {
      $('#snipcart-show-discount-box').attr('id', 'newId');
      $('#snipcart-cartitems-continue-top').css({"display": "block"});
      var snipcart_box_height = $('#snip-layout-cart-content').height();
      $('#snipcart-cartitems-continue-top').css({"top": snipcart_box_height - 55});
      $('#snipcart-cartitems-continue-top').text('<< Add another Order');
    }
    else {
      $('#snipcart-cartitems-continue-top').css({"display": "none"});
    }
      console.log(page);
  });
});
