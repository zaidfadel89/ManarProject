



  









jQuery(document).ready(function($) {

    if (sessionStorage.getItem('advertOnce') !== 'true') {
      $('.box').show();
    } else {
      $('.box').hide();
    };
  
    $('.btn-alpha').click(function() {
      sessionStorage.setItem('advertOnce', 'true');
      $('.box').hide();
    });
  
    $('.btn-beta').click(function() {
      window.location.href = 'http://google.com/';
  
    });
  });



















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