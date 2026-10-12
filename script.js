
let cart = [];
let total = 0;

function addCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function removeCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    document.getElementById("count").textContent = cart.length;
    document.getElementById("total").textContent = total;

    let list = document.getElementById("items");
    list.innerHTML = "";

    if (cart.length === 0) {
        list.innerHTML = "<li>Your cart is empty.</li>";
        return;
    }

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.name + " - ₹" + item.price + " ";

        let btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.onclick = () => removeCart(index);

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Please add food to your cart!");
    } else {
        alert("Order placed successfully! Total: ₹" + total);

        cart = [];
        total = 0;
        updateCart();
    }
}
