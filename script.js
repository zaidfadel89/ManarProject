
// jQuery(document).ready(function($) {

//     if (sessionStorage.getItem('advertOnce') !== 'true') {
//       $('.box').show();
//     } else {
//       $('.box').hide();
//     };
  
//     $('.btn-alpha').click(function() {
//       sessionStorage.setItem('advertOnce', 'true');
//       $('.box').hide();
//     });
  
//     $('.btn-beta').click(function() {
//       window.location.href = 'http://google.com/';
  
//     });
//   });







const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar){
    bar.addEventListener('click' , ()=>{
        nav.classList.add('active')
    })
}



const close = document.getElementById('close')

if(close){
    close.addEventListener('click' , ()=>{
    nav.classList.remove('active')
    })
}



// cart








const product = [
    {
        id:0,
        image: 'img/11.jpg',
        title: 'Title',
        price: 120,

    },
    {
        id:1,
        image: 'img/12.jpg',
        title: 'Title2',
        price: 121,

    },
    {
        id:2,
        image: 'img/13.jpg',
        title: 'Title3',
        price: 122,
    },
    {
        id:3,
        image: 'img/12.jpg',
        title: 'Title2',
        price: 121,

    },
    {
        id:4,
        image: 'img/13.jpg',
        title: 'Title3',
        price: 122,
    }
];


const categories =[...new Set(product.map((item)=>
    {return item}))]

    let i=0;

    document.getElementById('root').innerHTML = categories.map((item)=>
    {
        var {image , title , price} = item;
        return(
      
      `<div class='box'>
            <div class ='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>` +
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div> `

            
        )
}).join('');




var cart =[];
function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}


function delElement(a){
    cart.splice(a , 1);
    displaycart();
}


function displaycart(a){
    let j = 0, total=0;
    document.getElementById("count").innerHTML = cart.length;

    if(cart.length == 0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById('cartItem').innerHTML = cart.map((items)=>
        {
            var { image, title , price}=items;
            total = total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class = 'cart-item'>
                <div class='row-img'>
                <img class= 'rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00<h2>`+
                "<i  class = 'fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            )
        }).join('')
    }
}