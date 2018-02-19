var cart = {};

function addToCart(name, price){
    var item = cart[name] || {price: price, quantity: 0};
    item.price = price;
    item.quantity = item.quantity + 1;

    cart[name] = item;

    updateCartElements();
}

function removeFromCart(name) {
    delete cart[name];
    updateCartElements();
}

function updateCartElements() {
    var $cart = $("#cart");
    $cart.empty();

    var $list = $("<ul></ul>");

    for (var item in cart) {
        if (cart.hasOwnProperty(item)) {
            var data = cart[item];

            var $item = $("<li><span>" + item + "<span> - <span>"+ data.quantity +"x ("+ data.price * data.quantity + " &euro;)<span><a href=\"javascript:removeFromCart(\'"+item+"\')\">[remove]</a></li>")
            $list.append($item);
        }
    }

    $cart.append($list);
}
