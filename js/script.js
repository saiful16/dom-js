const rignButtons = document.querySelectorAll(".ring-button");
const productImages = document.getElementById('product-image');

 

// console.log(rignButtons)
for(let i =0; i < rignButtons.length; i++){
    const ringBtn = rignButtons[i];


    ringBtn.addEventListener('click', function(event){
        // rignButtons[i].classList.add('border-purple-400')
        for(let j =0; j < rignButtons.length; j++){
            rignButtons[j].classList.remove('border-purple-700')
            rignButtons[j].classList.add('border-gray-400')
        }
        event.target.classList.remove('border-gray-400')
        event.target.classList.add('border-purple-700')


        const allColor = event.target.id
        const color =allColor.replace('-color', '')
       
        
        productImages.src = "../images/"+ color + ".png"
        
    })

}

function selectWristSize(size){
    const sizes = ["S", "M", "L","XL"]
    
    for(let i = 0; i < sizes.length; i++){
        const btn = document.getElementById('size-' + sizes[i] )
        // console.log(btn)
        if(sizes[i] === size){
            btn.classList.add('border-purple-400')
        }
        else{
            btn.classList.remove('border-purple-400')
        }
    }
    
}

const quantityBtn = document.querySelectorAll('.quantity-button')
for(let btn of quantityBtn){
    // console.log(btn)
    btn.addEventListener('click', function(event){
        const amount = event.target.innerText === "+" ? 1 : -1;
        // console.log(userInput)
        const quantityElement = document.getElementById('quantity')
        const convertedAmount = parseInt(quantityElement.innerText)
        // console.log(amount, convertedAmount)
        const newAmount = Math.max(0, amount+convertedAmount)
        // console.log( typeof newAmount , typeof amount, typeof convertedAmount)
        console.log(typeof newAmount)
        quantityElement.innerText = newAmount;

        
    })
}