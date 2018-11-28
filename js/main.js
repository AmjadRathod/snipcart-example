
$(document).ready(function(){
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var html = $("#cart-content-text").html();
    $(html).insertBefore($("#snipcart-cartitems-continue-top"));
    var user_login = $("#user-login").html();
    $(user_login).insertBefore($("#snipcart-actions"));
    var user_logout = $("#user-logout").html();
    $(user_logout).insertBefore($("#snipcart-header"));
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
  Snipcart.subscribe('page.changed', function (page) {
    if (page == 'order-confirm') {
      $( ".js-submit" ).trigger( "click" );
      console.log('click');
    }
    console.log(page);
  });
  $('#dvDemo').attr('id', 'dvDemoNew');
  $("#snipcart-paymentmethod-pay").click(function(){
    console.log("hi");
  });
  $("#control-qid13228").click();
});
