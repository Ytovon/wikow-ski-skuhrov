/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
          toggle.addEventListener('click', () =>{
            // Add show-menu class to nav menu
            nav.classList.toggle('show-menu')
            window.document.documentElement.classList.remove('overflow');
     
            // Add show-icon to show and hide the menu icon
            toggle.classList.toggle('show-icon')
        })
 }
 
 showMenu('nav-toggle','nav-menu')


 // Assuming you have a dropdown element with the class "dropdown__item" for mobile
var dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach(function(item) {
  item.addEventListener('click', function() {
    const dropdownMenu = item.querySelector('.dropdown__menu');
    const dropdownArrow = item.querySelector('.dropdown__arrow');  
    
    if(window.outerWidth < 1350){
      dropdownMenu.classList.toggle('active-menu');  
      window.document.documentElement.classList.toggle('overflow');
     }
     // zbytečně složité, ale přes class nefungovalo - otáčení šipky
    if(dropdownMenu.classList.contains('active-menu')){
    dropdownArrow.style.transform = "rotate(180deg)";
    }
    else{
      dropdownArrow.style.transform = "rotate(0deg)";
    }

   
  });
});