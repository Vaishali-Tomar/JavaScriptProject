document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("count");
    const cartItemsElement = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    let cart = [];

    function updateCart() {
        cartCountElement.textContent = cart.length;
        cartItemsElement.innerHTML = '';

        if (cart.length === 0) {
            cartItemsElement.textContent = 'Your Cart is Empty';
        } else {
            cart.forEach(item => {
                const itemElement = document.createElement("div");
                itemElement.classList.add("cart-item");
                itemElement.innerHTML = `
                    <p>${item.name} - $${item.price.toFixed(2)}</p>
                    <p>Quantity: ${item.quantity}</p>
                `;
                cartItemsElement.appendChild(itemElement);
            });
        }

        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    function addToCart(product) {
        const existingItem = cart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...product, quantity: 1 });
        }

        updateCart();
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const productElement = button.closest(".product");
            const id = productElement.getAttribute("data-id");
            const name = productElement.getAttribute("data-name");
            const price = parseFloat(productElement.getAttribute("data-price"));

            addToCart({ id, name, price });
        });
    });
});
