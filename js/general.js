const actualities = Array.from(document.querySelectorAll('.actuality-divider__image'));

actualities.forEach(function(actuality, index) {
    if(index % 2 == 1){
        actuality.style.display = "none";
    }
});
