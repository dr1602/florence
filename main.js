// vamos a funcionar los distintos elementos

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");

const mainContainer = document.querySelector(".main-container");

const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

const homeContainer = document.querySelector(".home-container");
const resourcesContainer = document.querySelector(".resources-container");

// constante para navegar en el menu
const menusInicio = document.querySelector('.inicio');
const menusResources = document.querySelector('.resources');
const menusRopa = document.querySelector('.ropa');
const menusJoyeria = document.querySelector('.joyeria');
const menusPinturas = document.querySelector('.pinturas');
const menusAdornos = document.querySelector('.adornos');
const menusOtros = document.querySelector('.otros');

navEmail.addEventListener("click",toggleDesktopMenu);
menuIcon.addEventListener("click",toggleMobileMenu);
shoppingCart.addEventListener("click",toggleProductDetail);
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

// escuchar los clicks para navegar en el menu

//enable & disable desktop menu while also desibling the other menus
function toggleDesktopMenu() {
    console.log("click");
    desktopMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//enable & disable mobile menu while also desibling the other menus
function toggleMobileMenu() {
    console.log("click");
    mobileMenu.classList.toggle("inactive");
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//enable & disable product detail while also desibling the other menus
function toggleProductDetail() {
    console.log("click");
    shoppingCartContainer.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetailContainer.classList.add('inactive')
}

//opens and close the product detail with a click
function openProductDetailaside() {
    console.log("click");
    productDetailContainer.classList.toggle('inactive');
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    shoppingCartContainer.classList.add("inactive");
}

console.log("JS funcionando");

//closes the product detail with a click
function closeProductDetailAside() {
    console.log("click");
    productDetailContainer.classList.add('inactive');
}

console.log("JS funcionando");


// allows the input of new products and its characteristics

//Ropa
const productListRopa = [];
productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

productListRopa.push({
    name: 'Procedure',
    price: 5000,
    image: "https://images.pexels.com/photos/6291071/pexels-photo-6291071.jpeg?cs=srgb&dl=pexels-anna-shvets-6291071.jpg&fm=jpg",
});

//Joyería
const productListJoyeria = [];
productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

productListJoyeria.push({
    name: 'Airline',
    price: 500,
    image: "https://images.pexels.com/photos/4164495/pexels-photo-4164495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});

//Pinturas
const productListPinturas = [];
productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

productListPinturas.push({
    name: 'Hotel',
    price: 75,
    image: "https://images.pexels.com/photos/833045/pexels-photo-833045.jpeg?cs=srgb&dl=pexels-malidate-van-833045.jpg&fm=jpg",
});

//Adornos
const productListAdornos = [];
productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

productListAdornos.push({
    name: 'Loan',
    price: 50,
    image: "https://p1.pxfuel.com/preview/944/28/44/bank-building-architecture-sunrise-morning.jpg",
});

//Otros
const productListOtros = [];
productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

productListOtros.push({
    name: 'Spa',
    price: 20,
    image: "https://p0.pxfuel.com/preview/333/794/551/herbs-soap-recreation-spa.jpg",
});

// función para renderizar ropa

const cardsContainerRopa = document.createElement('div');
cardsContainerRopa.classList.add('card-container-ropa'); 

function renderProductsRopa(arr) {
    
    for (product of arr) {
        
        // product ={name, price, image} -> product.image
        const productCardRopa = document.createElement('div');
        productCardRopa.classList.add('product-card'); 
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardRopa.append(productImg, productInfo);
    
        cardsContainerRopa.appendChild(productCardRopa);

        mainContainer.appendChild(cardsContainerRopa);

        productCardRopa.classList.add('inactive');

        //shows the product in the cathegory "Ropa"

        menusRopa.addEventListener('click',toggleMenuRopa);

        function toggleMenuRopa() {
            console.log("click");
            productCardRopa.classList.toggle('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.add('inactive');
        }
    }
    
}

// función para renderizar joyería

const cardsContainerJoyeria = document.createElement('div');
cardsContainerJoyeria.classList.add('card-container-joyeria'); 

function renderProductsJoyeria(arr) {
    
    for (product of arr) {

        const productCardJoyeria = document.createElement('div');
        productCardJoyeria.classList.add('product-card');  

        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardJoyeria.append(productImg, productInfo);
    
        cardsContainerJoyeria.appendChild(productCardJoyeria);

        mainContainer.appendChild(cardsContainerJoyeria);

        productCardJoyeria.classList.add('inactive');   
    
        //shows the product in the cathegory "Joyeria"
    
        menusJoyeria.addEventListener('click',toggleMenuJoyeria);
    
        function toggleMenuJoyeria() {
            console.log("click");
            productCardJoyeria.classList.toggle('inactive');
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.toggle('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.add('inactive');  
        }
    }
    
}

// función para renderizar pinturas

const cardsContainerPinturas = document.createElement('div');
cardsContainerPinturas.classList.add('card-container-pinturas'); 

function renderProductsPinturas(arr) {
    
    for (product of arr) {

        const productCardPinturas = document.createElement('div');
        productCardPinturas.classList.add('product-card');  

        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardPinturas.append(productImg, productInfo);
    
        cardsContainerPinturas.appendChild(productCardPinturas);

        mainContainer.appendChild(cardsContainerPinturas);
    
        productCardPinturas.classList.add('inactive');  
    
        //shows the product in the cathegory "Pinturas"
    
        menusPinturas.addEventListener('click',toggleMenuPinturas);
    
        function toggleMenuPinturas() {
            console.log("click");
            productCardPinturas.classList.toggle('inactive');  
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.toggle('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.add('inactive'); 
        }
    }

}

// función para renderizar adornos

const cardsContainerAdornos = document.createElement('div');
cardsContainerAdornos.classList.add('card-container-adornos'); 

function renderProductsAdornos(arr) {
    
    for (product of arr) {
    
        const productCardAdornos = document.createElement('div');
        productCardAdornos.classList.add('product-card'); 

        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardAdornos.append(productImg, productInfo);
    
        cardsContainerAdornos.appendChild(productCardAdornos);

        mainContainer.appendChild(cardsContainerAdornos);

        productCardAdornos.classList.add('inactive');
    
        //shows the product in the cathegory "Adornos"
    
        menusAdornos.addEventListener('click',toggleMenuAdornos);
    
        function toggleMenuAdornos() {
            console.log("click");
            productCardAdornos.classList.toggle('inactive');
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.toggle('inactive');
            productCardOtros.classList.add('inactive');
        }
    }

}

// función para renderizar otros

const cardsContainerOtros = document.createElement('div');
cardsContainerOtros.classList.add('card-container-otros'); 

function renderProductsOtros(arr) {
    
    for (product of arr) {

        const productCardOtros = document.createElement('div');
        productCardOtros.classList.add('product-card'); 
    
        // product ={name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetailaside);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price + '.00';
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg')
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCardOtros.append(productImg, productInfo);
    
        cardsContainerOtros.appendChild(productCardOtros);

        mainContainer.appendChild(cardsContainerOtros);
    
        productCardOtros.classList.add('inactive');    
    
        //shows the product in the cathegory "Otros"
    
        menusOtros.addEventListener("click",toggleMenuOtros);
    
        function toggleMenuOtros() {
            console.log("click");
            productCardOtros.classList.toggle('inactive');    
            productCardRopa.classList.add('inactive');
            productCardJoyeria.classList.add('inactive');
            productCardPinturas.classList.add('inactive');
            productCardAdornos.classList.add('inactive');
            productCardOtros.classList.toggle('inactive');
        }
    }
 
}

renderProductsRopa(productListRopa);
renderProductsJoyeria(productListJoyeria);
renderProductsPinturas(productListPinturas);
renderProductsAdornos(productListAdornos);
renderProductsOtros(productListOtros);

menusInicio.addEventListener('click',toggleHomeContainer);

function toggleHomeContainer() {
    console.log("click");

    homeContainer.classList.remove('inactive');
    resourcesContainer.classList.add('inactive');
}

menusResources.addEventListener('click',toggleResourcesContainer);

function toggleResourcesContainer() {
    console.log("click");

    homeContainer.classList.add('inactive');
    resourcesContainer.classList.remove('inactive');
}

menusRopa.addEventListener('click',toggleMenuRopa);

function toggleMenuRopa() {
    console.log("click");

    homeContainer.classList.add('inactive');
    resourcesContainer.classList.add('inactive');
    productCardRopa.classList.toggle('inactive');
    productCardJoyeria.classList.add('inactive');
    productCardPinturas.classList.add('inactive');
    productCardAdornos.classList.add('inactive');
    productCardOtros.classList.add('inactive');
}

menusJoyeria.addEventListener('click',toggleMenuJoyeria);
    
function toggleMenuJoyeria() {
    console.log("click");

    homeContainer.classList.add('inactive');
    resourcesContainer.classList.add('inactive');
    productCardJoyeria.classList.toggle('inactive');
    productCardRopa.classList.add('inactive');
    productCardJoyeria.classList.toggle('inactive');
    productCardPinturas.classList.add('inactive');
    productCardAdornos.classList.add('inactive');
    productCardOtros.classList.add('inactive');  
}
   
menusPinturas.addEventListener('click',toggleMenuPinturas);
    
function toggleMenuPinturas() {
    console.log("click");

    homeContainer.classList.add('inactive');
    resourcesContainer.classList.add('inactive');
    productCardPinturas.classList.toggle('inactive');  
    productCardRopa.classList.add('inactive');
    productCardJoyeria.classList.add('inactive');
    productCardPinturas.classList.toggle('inactive');
    productCardAdornos.classList.add('inactive');
    productCardOtros.classList.add('inactive'); 
}

menusAdornos.addEventListener('click',toggleMenuAdornos);
    
function toggleMenuAdornos() {
    console.log("click");

    homeContainer.classList.add('inactive');
    resourcesContainer.classList.add('inactive');
    productCardAdornos.classList.toggle('inactive');
    productCardRopa.classList.add('inactive');
    productCardJoyeria.classList.add('inactive');
    productCardPinturas.classList.add('inactive');
    productCardAdornos.classList.toggle('inactive');
    productCardOtros.classList.add('inactive');
}

menusOtros.addEventListener("click",toggleMenuOtros);
    
function toggleMenuOtros() {
    console.log("click");

    homeContainer.classList.add('inactive');
    resourcesContainer.classList.add('inactive');
    productCardOtros.classList.toggle('inactive');    
    productCardRopa.classList.add('inactive');
    productCardJoyeria.classList.add('inactive');
    productCardPinturas.classList.add('inactive');
    productCardAdornos.classList.add('inactive');
    productCardOtros.classList.toggle('inactive');
}