const actualities = Array.from(document.querySelectorAll('.divider__image'));

actualities.forEach(function(actuality, index) {
    if(index % 2 == 1){
        actuality.style.display = "none";
    }
});
