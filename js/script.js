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