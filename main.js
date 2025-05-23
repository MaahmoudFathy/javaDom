const products =document.querySelector(".cardo");

function printing(){
    for (let index = 0; index < 9; index++) {
        products.innerHTML+=`<div class="ca p-4 d-flex flex-column gap-3 bg-light rounded-3  position-relative">
                    <img class="position-absolute heart rounded-2"
                        src="https://cdn-icons-png.flaticon.com/128/2077/2077502.png" alt="">
                    <img class="w-100 rounded-2"
                        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
                        alt="">
                    <h6>350$</h4>
                        <p>Lorem ipsum dolor sit.</p>
                        <h3 class="btn btn-dark w-100">Add to cart</h3>
                </div>`

    }
}
printing();