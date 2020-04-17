/** Add any JavaScript you need to this file. */

// document.getElementById("a").onclick = function(e){

//     var value = e.value;
//     if (value == 3){
//       document.getElementById("orderLabel").style.visibility = "visible";
//       document.getElementById("orderNum").style.visibility = "visible";
//     }
//     else {
//       document.getElementById("orderNum").style.visibility = "hidden";
//       document.getElementById("orderLabel").style.visibility = "hidden";
//     }

// }

// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the header
// var header = document.getElementById("myHeader");

// // Get the offset position of the navbar
// var sticky = header.offsetTop;

// // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

/**
 * Click Handlers for everything on the page
 */

productsData = [
    {
        picFile: '1.jpg',
        title: 'Faux Leather Backpack',
        category: 'Accessories',
        size: 'Universal',
        desc: 'Light brown faux leather backpack. Has drawstrings and a flap with a rose gold closure.',
        price: 20
    },
    {
        picFile: '2.jpg',
        title: 'Decorated Jeans',
        category: 'Womens',
        size: '6/27',
        desc: 'High waisted jeans with decorative patches and embroidery. Distressed at the left knee.',
        price: 25
    },
    {
        picFile: '3.jpg',
        title: 'Black Turtleneck',
        category: 'Mens',
        size: 'Medium',
        desc: 'Oversized black turtleneck sweater.',
        price: 18
    },
    {
        picFile: '4.jpg',
        title: 'Flat Cap',
        category: 'Accessories',
        size: 'Universal',
        desc: 'Beige flat cap with decorative stars.',
        price: 12
    },
    {
        picFile: '5.jpg',
        title: 'Wide Leg Jeans',
        category: 'Womens',
        size: '8/29',
        desc: 'High waisted, wide leg, light wash jeans. Darker wash and distressed at hem.',
        price: 22
    },
    {
        picFile: '6.jpg',
        title: 'Ice Cream Baseball Cap',
        category: 'Accessories',
        size: 'Universal',
        desc: 'Beige baseball cap with ice cream cone embroidery.',
        price: 12
    },
    {
        picFile: '7.jpg',
        title: 'Fanny Pack',
        category: 'Accessories',
        size: 'Universal',
        desc: 'Interesting black fanny pack. Has belt detail and silver buttons.',
        price: 18
    },
    {
        picFile: '8.jpg',
        title: 'Plaid Slacks',
        category: 'Womens',
        size: '10',
        desc: 'High waisted glen plaid slacks.',
        price: 20
    },
    {
        picFile: '9.jpg',
        title: 'Parka',
        category: 'Mens',
        size: 'Medium',
        desc: 'Green winter parka with gold zipper and button detailing.',
        price: 28
    },
    {
        picFile: '10.jpg',
        title: 'Hummingbird Long Sleeve',
        category: 'Womens',
        size: 'Large',
        desc: 'Oversized yellow shirtwith humming bird print. Long with full sleeves.',
        price: 15
    },
    {
        picFile: '11.jpg',
        title: 'Timberland Boots',
        category: 'Mens',
        size: '8',
        desc: 'Pair of Timberland Boots.',
        price: 50
    },
    {
        picFile: '12.jpg',
        title: 'Nike Sneakers',
        category: 'Womens',
        size: '6',
        desc: 'Red, white, and black high top Nike sneakers.',
        price: 35
    },
    {
        picFile: '13.jpg',
        title: '"Hawaiian" Shirt',
        category: 'Mens',
        size: 'Medium',
        desc: 'Short sleeve, collared Hawaiian Shirt.',
        price: 15
    }
    
];

        function getByCategory(cat) {
            var array = [];
            var arrayNum = 0;
            
            for (var i = 0; i < productsData.length; i++){


                if (productsData[i].category == cat){
                    array[arrayNum] = {
                        picFile: productsData[i].picFile,
                        title: productsData[i].title,
                        category: cat,
                        size: productsData[i].size,
                        desc: productsData[i].desc,
                        price: productsData[i].price
                    };
                    arrayNum++;
                }

            }
            return array;
        }

    let columnHelper = {
        clearColumns: function() {
            document.getElementById("firstColumn").innerHTML = "";
            document.getElementById("secondColumn").innerHTML = "";
        },

        productToDiv: function(product){
            var productContainer = document.createElement("div");
            var productInfoContainer = document.createElement("div");
            var productCategorySizeContainer = document.createElement("div");

            var productPic = document.createElement("img");
            str = "images/" + product.picFile;
            productPic.setAttribute("src", str);

            var productTitle = document.createElement("h4");
            productTitle.appendChild(document.createTextNode(product.title));

            var productCategory = document.createElement("h6");
            productCategory.appendChild(document.createTextNode(product.category));

            var productSize = document.createElement("h6");
            productSize.appendChild(document.createTextNode("Size: " + product.size));

            var productDesc = document.createElement("p");
            productDesc.appendChild(document.createTextNode(product.desc));

            var productPrice = document.createElement("h6");
            productPrice.appendChild(document.createTextNode("$ " + product.price.toFixed(2)));

            productInfoContainer.appendChild(productTitle);

            productCategorySizeContainer.appendChild(productCategory);
            productCategorySizeContainer.appendChild(productSize);
            productInfoContainer.appendChild(productCategorySizeContainer);

            productInfoContainer.appendChild(productDesc);
            productInfoContainer.appendChild(productPrice);

            productContainer.appendChild(productPic);
            productContainer.appendChild(productInfoContainer);

            return productContainer;
        },

        productsToColumns: function(products) {
            this.clearColumns();

            console.log(products.length);

            for (var i = 0; i < products.length; i ++){
                if (i < products.length/2){
                    document.getElementById("firstColumn").appendChild(columnHelper.productToDiv(products[i]));
                }
                else{
                    document.getElementById("secondColumn").appendChild(columnHelper.productToDiv(products[i]));
                }
            }
        }
    };


    function setupHandlers() {

        var allProducts = document.getElementById("filter_all");
        var contentHead = document.createElement("h1");

        allProducts.addEventListener("click", function(e) {
            document.getElementById("contentHead").innerHTML=("All Products");
            columnHelper.productsToColumns(productsData);
        });

        var womens = document.getElementById("filter_womens");

        womens.addEventListener("click", function(e){
            document.getElementById("contentHead").innerHTML=("All Products > Women's");
            columnHelper.productsToColumns(getByCategory("Womens"));
        });

        var mens = document.getElementById("filter_mens");

        mens.addEventListener("click", function(e){
            document.getElementById("contentHead").innerHTML=("All Products > Men's");
            columnHelper.productsToColumns(getByCategory("Mens"));
        });

        var acc = document.getElementById("filter_acc");

        acc.addEventListener("click", function(e){
            document.getElementById("contentHead").innerHTML=("All Products > Accessories");
            columnHelper.productsToColumns(getByCategory("Accessories"));
        });
    }

    window.onload = setupHandlers;

 function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
  
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

  if (window.location.href.match('index.html') != null) {
     columnHelper.productsToColumns(productsData);
 }