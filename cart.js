function wrapItem(item){
    return "<li class='list-group-item'>"+item.itemName + " $" + item.itemPrice + "</li>";
}
function updateView(){
    const cart = $('.cart ul');
    let itemsWrap="";
    let subtotal = 0;
    let tax = 0;
    let total = 0;
    for(let i = 0; i<cartItems.length;i++){
        itemsWrap += wrapItem(cartItems[i]);
        subtotal += parseFloat(cartItems[i].itemPrice);
    }
    tax = subtotal / 10;
    total = tax+subtotal;
    itemsWrap+="<li class='list-group-item'>"+"Subtotal: $" + subtotal + "</li>";
    itemsWrap+="<li class='list-group-item'>"+"Tax: $" + tax + "</li>";
    itemsWrap+="<li class='list-group-item'>"+"Total: $" + total + "</li>";
    cart.html(itemsWrap);
}
function addItem(event){
    const item = $(event.target).parent().find('p');
    const itemName = item[0].textContent; 
    const itemPrice = item[1].textContent.substring(1);
    cartItems.push({itemName, itemPrice});
    updateView();
}
function alert(){
    $('#alert-placeholder').html('<div class="alert alert-success" role="alert">Proceeding to payment!</div>');
}
function init(){
    $('.add-button').click(addItem);
    $('#submit').click(alert);
}

const cartItems = [];

$(window).on('load', init);

