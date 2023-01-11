"use strict";


//Sticky Navbar---------------------------------------
   const navbar = document.querySelector('#navbar');
   let tops = navbar.offsetTop;
     function stickynavbar() {
       if (window.scrollY >= tops) {    
       navbar.classList.add('sticky');
   } else {
     navbar.classList.remove('sticky');    
   }
 }
 window.addEventListener('scroll', stickynavbar);



//Navbar Active Design-----------------------------------

 const navbarTab = document.getElementById("nav-tabs");
 navbarTab.addEventListener("click", tabfun);
 function tabfun (event){
   const tabs = document.querySelectorAll(".active");

   tabs.forEach((now)=>{
     now.classList.remove('active');
   });

   event.target.parentElement.classList.add('active');
 }


//Cart Window open------------------------------------------

 function add(){
    document.querySelector(".cart-box-use").classList.add("cartBoxActive");
   }

 function remove(){
   document.querySelector(".cart-box-use").classList.remove("cartBoxActive");
 }

//cart Section

document.addEventListener('DOMContentLoaded', loadhoney);

function loadhoney() {

 loadCondent();

}

//Load Contend=================

function loadCondent(){

  //Remove Iem From Cart
    let cartTrash = document.querySelectorAll(".carttrash");
    cartTrash.forEach((btn) => {
        btn.addEventListener('click', removeItem)
    });

  //Product Item Change
   let qtyElement = document.querySelectorAll(".cart-quantity");
   qtyElement.forEach((input) => {
       input.addEventListener('change', qtyChange)
   });

    //Product Select
    let carbtnEl = document.querySelectorAll(".cart-btn");

    carbtnEl.forEach((btn) => {
      btn.addEventListener('click', addCart)
  });
   
  toastTrigger();

  updateTotal();

  placeOrder();

}

//Toast============
function toastTrigger(){
  const toastTrigger = document.querySelectorAll('.cart-btn')
  const toastLiveExample = document.getElementById('liveToast')
  
  toastTrigger.forEach((btn) => {
  
    if(btn) {
      btn.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)
    
        toast.show()
      })
    }
  
  }) 
  }

//Remove Item
function removeItem(){
  if(confirm("Do You Want to Remove?")){
    let title = this.parentElement.querySelector('.Cart-title').innerHTML;

    itemList=itemList.filter(el=>el.title !== title);

    this.parentElement.remove();
    loadCondent();
  }
}

//Change Quantity
function qtyChange(){
if(isNaN(this.value) || this.value < 1){
  this.value = 1;
}
loadCondent();
}

let itemList = [];
//Add Cart
function addCart(){
  let food = this.parentElement;
  let title = food.querySelector('.nhoney').innerHTML;
  let price = food.querySelector('.pricehoney').innerHTML;
  let imgSrc = food.querySelector('.himage').src;

  let newproduct ={title,price,imgSrc}

  //Check product Already Exist
  if(itemList.find((el)=>el.title == newproduct.title)){
    alert("Product Already in Cart")
    return;
  }else{
    itemList.push(newproduct);
  }
  
  let productEl = createCartProduct(title,price,imgSrc);

  let element =document.createElement('div');
  element.innerHTML=productEl;

  let cartBasket =document.querySelector('.cart-details');

  cartBasket.append(element);
  loadCondent();
}

function createCartProduct(title,price,imgSrc){
  return `<div class="cart-boxes">
  <div class="image">
    <img class="img-fluid cart-img" src="${imgSrc}" alt="">
  </div>
  <div class="cart-contend">
    <div class="Cart-title">${title}</div>
    <div class="price">
      <div class="cart-price">${price}</div>
      <div class="cart-price-total">${price}</div>
    </div>
    <input type="number" value="1" class="cart-quantity">
  </div>
  <ion-icon name="trash" class="carttrash"></ion-icon>
</div>`


}


//Update Total

function updateTotal(){

  const cartItems = document.querySelectorAll('.cart-boxes');
  const totalValue = document.querySelector('.total-price');

  let total = 0;

  cartItems.forEach(product=>{
    let priceElement = product.querySelector('.cart-price');
    let price = parseFloat(priceElement.innerHTML.replace('Rs.',""));
    let qty = product.querySelector('.cart-quantity').value;
    
  total += (price*qty);

  product.querySelector('.cart-price-total').innerHTML = "Rs." + (price*qty);

  })

  totalValue.innerHTML = 'Rs.'+total;

  const cartCount = document.querySelector(".cart-count");
  let count = itemList.length;
  cartCount.innerHTML=count;

  if(count==0){
    cartCount.style.display='none';
  }else{
    cartCount.style.display='block';
  }

}

function placeOrder(){
  
  if(itemList.find(el=>el.title !== "")){
    let buy = document.querySelector('.btn-buy')
    buy.removeAttribute('disabled');
    return;
  }else{
    let buy = document.querySelector('.btn-buy')
    buy.setAttribute('disabled',true);
  }
  
}


const btnpay = document.querySelector('.btn-pay')

  btnpay.addEventListener('click',()=>{
    let upi = document.querySelector('#upi').value;
    let card = document.querySelector('#card').value;
    let incard = document.querySelector('#incard').value;
    let incvv = document.querySelector('#incvv').value;
    
    if(upi == ""){
      alert("Please Choose Payment Mode");
    }else{

    function removePay(){
        btnpay.setAttribute("data-bs-dismiss","modal");
      }
    }
    removePay();

  });


  
  
  
  
  

