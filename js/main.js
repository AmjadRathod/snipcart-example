
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
  });
  Snipcart.execute('bind', 'cart.opened', function() {
    Snipcart.execute('unbind', 'cart.opened');

    var user_pro = $("#user-profile-info").html();
    $(user_pro).insertBefore($("#snipcart-header"));
  });
Snipcart.api.configure('show_continue_shopping', false);
  $("#snipcart-header-total").css('display', 'none!important');
  $(".snip-quantity-trigger__btn .snip-quantity-trigger__btn--add").css('display', 'none!important');
});
