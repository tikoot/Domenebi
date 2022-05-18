const categories = [
    {
        name: "უძრავი ქონება",
        id: 1
    },
    {
        name: "ბიზნესი",
        id: 2
    },
    {
        name: "მედია",
        id: 3
    }
]

const domainList = [
    {
        domainName: "example1",
        domainExtension: ".ge",
        price: 299,
        categories: [1,2]
    },
    {
        domainName: "example2",
        domainExtension: ".com.ge",
        price: 299,
        categories: [2,3]
    },
    {
        domainName: "example3",
        domainExtension: ".edu.ge",
        price: 299,
        categories: [2]
    },
    {
        domainName: "example4",
        domainExtension: ".ge",
        price: 299,
        categories: [3]
    },
    {
        domainName: "example5",
        domainExtension: ".org.ge",
        price: 299,
        categories: [1,3]
    }
]


$('document').ready(function(){
    addCategories();
    addProducts();
    filterByCategory();
    filterByDomain();
    addToCart();

    function addCategories(){
    categories.forEach((obj) => {
    let category = `<label class="each_categorie"> <input class="each_checkbox" type="radio"  name="checkCategorie" 
    value="${obj.id}" id="${obj.name}"> <span class="checkmark"></span> <span class="each_categorie_text"> ${obj.name} </span> </label> `;
       $('.categories_wrap').append(category);
   });
}

   function addProducts(){
     function geltoUsd(val){
        return Math.round(val / 3);
  }
   domainList.forEach((obj) => {
   let products = `<div class="each_product" data-name="${obj.domainName}"data-extenstion = "${obj.domainExtension} "data-price=" ${obj.price} "categories="${obj.categories[0]}" categoriestwo="${obj.categories[1]}" whole-name = "${obj.domainName+obj.domainExtension}">
   <div class="each_product_wrap"> <button class="arrow_btn">  </button> <p class="product_name">${obj.domainName + obj.domainExtension}</p> <div class="product_price"> <span class="price_one">${obj.price} ₾ </span>
   <span class="price_two">${ geltoUsd(obj.price)}  $ </span> </div> <button class="cart_btn"> <p class="add_cart"><span>დამატება</span><img src="assets/cart.svg" alt="cart"></p> </button> </div> </div>`;
   $('.product_wrap').append(products);

   });
}

function addToCart(){
   let addItem = 0;
   $('.cart_btn').one("click", function(){
       $(this).addClass('active');
       let cart_inside = '';
       cart_inside += '<p class="already_cart"> <img src="assets/Group 4868.svg"" alt="checkmark">კალათაშია </p>';
       $(this).siblings('.product_price').addClass('active');      
       $(this).append(cart_inside);
   
       addItem += 1;
       let cartcount = document.querySelector('.cart_count');
       cartcount.innerHTML = addItem;
       
     
       localStorage.setItem('cart', addItem);
       
   });

  
   
}



function filterByCategory(){
    const checkboxes = document.querySelectorAll(".each_checkbox");
    const productContainer = document.querySelector(".product_wrap");
    var checkboxValues = [ ]; 
 
    checkboxes.forEach((box) => {
     box.checked = false;
     box.addEventListener("change", () => filterProducts());
 });
 
 function grabCheckboxValues() {
     var checkboxValues = [];
     checkboxes.forEach((checkbox) => {
           if (checkbox.checked) checkboxValues.push(checkbox.value);
     });
     return checkboxValues;
 }
 
 
 function filterProducts() { 
    checkboxValues = grabCheckboxValues();
    console.log(checkboxValues);
    let products = document.querySelectorAll('.each_product')
      
    for(let i = 0 ; i < products.length; i++){
        let productId = products[i].getAttribute('categories');
        let productIdTwo = products[i].getAttribute('categoriestwo');    
        let result = (arr, target) => target.every((v) => arr.includes(v));
        let resultTwo = (arr, target) => target.every((v) => arr.includes(v));
        let isMatchTwo = resultTwo(productIdTwo, checkboxValues); 

        let isMatch = result(productId, checkboxValues);
        if (isMatch || isMatchTwo ) {
            $(products[i]).css("display","block");
    }else if(!isMatch || !isMatchTwo){
        $(products[i]).css("display","none");
        }
    }
} 
 } 
 



function filterByDomain(){
    const checkboxes = document.querySelectorAll(".each_checkbox_domain");
    const productContainer = document.querySelector(".product_wrap");
    var checkboxValues = [ ]; 

    checkboxes.forEach((box) => {
        box.checked = false;
        box.addEventListener("change", () => filterProducts());
    });
    
    function grabCheckboxValues() {
        var checkboxValues = [];
        checkboxes.forEach((checkbox) => {
              if (checkbox.checked) checkboxValues.push(checkbox.value);
        });
        return checkboxValues;
    }
    
    
    function filterProducts() {
       checkboxValues = grabCheckboxValues();
        console.log(checkboxValues);
        let products = document.querySelectorAll('.each_product')
          
        for(let i = 0 ; i < products.length; i++){
            let productId = products[i].getAttribute('data-extenstion');
            let result = (arr, target) => target.every((v) => arr.includes(v));
            let isMatch = result(productId, checkboxValues);
            if (isMatch) {
                $(products[i]).css("display","block");
        }else if(!isMatch){
            $(products[i]).css("display","none");
            }
        }
    } 
}


});


$('.input_name_search').keyup(function(){
    let products = document.querySelectorAll('.each_product')
    for (i = 0; i < products.length; i++) {
        let productId = products[i].getAttribute('whole-name');
        var valThis = $(this).val().toLowerCase();
        if (productId !== valThis) {
            $(products[i]).css("display","none");
            
        }else if(productId == valThis ){
            $(products[i]).css("display","block");
        }
      }


});
