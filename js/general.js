const actualities = Array.from(document.querySelectorAll('.divider__image'));

actualities.forEach(function(actuality, index) {
    if(index % 2 == 1){
        actuality.style.display = "none";
    }
});

function openRacingDropdown () {
    const dropdown = document.getElementById('myDropdown');
    const arrow = document.getElementById('arrow')

    dropdown.classList.toggle('show');
    arrow.classList.toggle('rotate');
  }