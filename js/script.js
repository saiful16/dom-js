const rignButtons = document.querySelectorAll(".ring-button");
const productImages = document.getElementById('product-image');
const imageBase = "../images/"


// console.log(rignButtons)
for (let i = 0; i < rignButtons.length; i++) {
    const ringBtn = rignButtons[i];


    ringBtn.addEventListener('click', function (event) {
        // rignButtons[i].classList.add('border-purple-400')
        for (let j = 0; j < rignButtons.length; j++) {
            rignButtons[j].classList.remove('border-purple-600')
            rignButtons[j].classList.add('border-gray-400')
        }
        event.target.classList.remove('border-gray-400')
        event.target.classList.add('border-purple-600')


        const allColor = event.target.id
        const color = allColor.replace('-color', '')


        productImages.src = "../images/" + color + ".png"

    })

}

function selectWristSize(size) {
    const sizes = ["S", "M", "L", "XL"]

    for (let i = 0; i < sizes.length; i++) {
        const btn = document.getElementById('size-' + sizes[i])
        // console.log(btn)
        if (sizes[i] === size) {
            btn.classList.add('border-purple-400')
        }
        else {
            btn.classList.remove('border-purple-400')
        }
    }

}

const quantityBtn = document.querySelectorAll('.quantity-button')
for (let btn of quantityBtn) {
    // console.log(btn)
    btn.addEventListener('click', function (event) {
        const amount = event.target.innerText === "+" ? 1 : -1;
        // console.log(userInput)
        const quantityElement = document.getElementById('quantity')
        const convertedAmount = parseInt(quantityElement.innerText)
        // console.log(amount, convertedAmount)
        const newAmount = Math.max(0, amount + convertedAmount)
        // console.log( typeof newAmount , typeof amount, typeof convertedAmount)
        // console.log(typeof newAmount)
        quantityElement.innerText = newAmount;


    })
}

// add to cart
let currentCart = 0;
let cartItems = []
document.getElementById('add-to-cart').addEventListener('click', function () {

    const quantity = parseInt(document.getElementById('quantity').innerText)
    if (quantity > 0) {
        document.getElementById('checkout-container').classList.remove('hidden')
        currentCart = quantity + currentCart;
        // console.log(currentCart)
        document.getElementById('cart-count').innerText = currentCart;
        const selectColorbtn = document.querySelector('button.border-purple-600.w-6')
        const selectColor = selectColorbtn.id.split('-')[0]

        const selectSizebtn = document.querySelector('button.border-purple-400:not(.w-6)')
        const size = selectSizebtn.innerText.split(' ')[0]
        const price = selectSizebtn.innerText.split('$')[1]

        const productImages = document.getElementById('product-image')


        cartItems.push({
            image: selectColor + '.png',
            title: "Classy Mordern Watch",
            color: selectColor,
            size: size,
            quantity: quantity,
            price: price * quantity
        })
        // console.log(size, price, productImages, cartItems)

    }
    else {
        alert('Please Select a Product')
    }

})

document.getElementById('checkout-btn').addEventListener('click', function () {
    const cartModal = document.getElementById('cart-modal')

    const cartContainer = document.getElementById('cart-items')
    // console.log(cartContainer)
    let totalQuantity = 0;
    let totalPrice = 0;
    for (i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];

        const row = document.createElement('tr');
        const totalPriceRow = document.createElement('div');
        const cartTable = document.getElementById('cart-table')
        row.classList.add('border-b')
        // totalPriceRow.classList.add('')
        totalQuantity = totalQuantity + cartItems[i].quantity
        totalPrice = totalPrice + item.price;
        console.log(totalQuantity)
        row.innerHTML = `
        <td>
            <div class="py-2 gap-2 flex justify-center items-center">
                <img class="w-12 object-cover" src="${imageBase}${item.image}" alt="" />
                <p class=" font-semibold">${item.title}</p>
            </div>
        </td>
        <td class="py-2 px-2 font-semibold">${item.color}</td>
        <td class="py-2 px-2 font-semibold">${item.size}</td>
        <td class="py-2 px-2 font-semibold">${item.quantity}</td>
        <td class="py-2 px-2 font-semibold">$ ${item.price}</td>
        `
        totalPriceRow.innerHTML = `
       
        <div class=" flex justify-end items-center w-full" >
            <p class="py-2 px-2 font-semibold">Total Quantity:${totalQuantity}</p>
            <p class="py-2 px-2 font-semibold">Total Price : $${totalPrice}</p>
            
        </div>

        `

        cartContainer.appendChild(row);
        cartTable.appendChild(totalPriceRow);
    }


    cartModal.classList.remove('hidden')
})

document.getElementById('continue-shopping').addEventListener('click', function(){
    document.getElementById('cart-modal').classList.add('hidden')
})
document.getElementById('checkout').addEventListener('click', function(){
    alert("Going to Payment Option")
})