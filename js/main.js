
$(document).ready(function(){
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');
    var html = $("#cart-content-text").html();
    $(html).insertBefore($("#snipcart-cartitems-continue-top"));
    var user_login = $("#user-login").html();
    $(user_login).insertBefore($("#snipcart-header"));
    var user_logout = $("#user-logout").html();
    $(user_logout).insertBefore($("#snipcart-header"));
    var user_name = $("#user-profile-infoo").html();
    $(user_name).insertBefore($("#snipcart-header"));
    var continue_btn = $("#continue_btn").html();
    $(continue_btn).insertBefore($("#snipcart-footer"));
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');

    var user_pro = $("#user-profile-info").html();
    $(user_pro).insertBefore($("#snipcart-header"));
  });
  $('#dvDemo').attr('id', 'dvDemoNew');
  $("#snipcart-paymentmethod-pay").click(function(){
    console.log("hi");
  });
  $("#control-qid13228").click();
});
