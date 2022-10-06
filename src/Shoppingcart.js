import React from "react";
export default function shoppingcart(){
    return(
    <div class='shoppinghead'>
      <div>
      <h4 >Shopping Cart</h4>
      <h6 class="paakcolor">Enjoy Free Shipping on Prepaid Orders!</h6> 
      </div>
      <div class='row'>
        <div class='col-sm'>
        <img src="https://cdn.shopify.com/s/files/1/0270/3346/9006/products/1L_300x.jpg?v=1653980597" width={100} height={100} class="vdoslide" />
        </div>
  
        <div class='col-sm'>
          <p className="paak"> Dry Fruit Paak Sweet 500 gram</p>
        </div>
        </div>  

       <div class='boxtext'>
       <input type="text" class='coupon' placeholder="ENTER COUPON CODE HERE...."></input><button type="button" class='apply'>Apply</button> 
       </div>
       <div>
       <h6 class='summary'>Price Summary</h6>
       </div>
       <div class='row'>
        <div class='col-sm'>
          <ul class='liststyle'>
            <li>Price(1 items)</li>
            <li class='discount'>Discount</li>
            <li class='total'>Total</li>
          </ul>
        </div>
        <div class='col-sm'>     
        <ul class='liststyle rupee'>
            <li>₹ 799</li>
            <li>₹ 0</li>
            <li><b>₹799</b></li>
          </ul>
        </div>
       </div>
      <div><button type="button" class='UPI'>Pay Via UPI/Cash on Delivery</button> </div>
      <div><button type="button" class='paylater'>Pay Via Debit/Credit Card/Pay Later</button> </div>
      <div class='row secure'>
         <div class='col-sm'>
          <p className="secure1">Secure Payments</p>
        </div>
        <div class='col-sm'>
         <p className="secure1">Certified Products</p>
        </div>
      </div>
    </div>
    );
}