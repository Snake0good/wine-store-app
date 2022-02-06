// Get the modal
var openingPage = document.getElementById('opening-page')
var selectionsPage = document.getElementById('selections-page')
var page3 = document.getElementById('myModal2')


// Get the button that opens the modal
var exploreBtn = document.getElementById("explore");
var selectionBtn = document.querySelector('.single-bottle-container')


// When the user clicks the button, open the modal 
exploreBtn.onclick = function() {
  selectionsPage.style.display = "block";
  openingPage.style.display = "none";
}


var demo = document.getElementById('demo')


selectionBtn.onclick = function() {
  page3.style.display = "block";
  openingPage.style.display = "none";
  selectionsPage.style.display = "none";
}



// modal 2 or page 3 vars and stuff AND handling 
var minusBtn = document.getElementById('minus')
var plusBtn = document.getElementById('plus')
var numberItems = document.getElementById('number-items')
var itemsCount = 1;

minusBtn.onclick = function() {
  if (itemsCount === 0) {
    itemsCount = 0;
  } else {
    itemsCount--
  }

  numberItems.innerHTML = itemsCount
  
}

plusBtn.onclick = function() {
  if (itemsCount === 20) {
    itemsCount = 20;
  } else {
    itemsCount++
  }
  
  numberItems.innerHTML = itemsCount
}





var backToPageTwoBtn = document.getElementById('backToPage2')

backToPageTwoBtn.onclick = function() {
  selectionsPage.style.display = "block";
  openingPage.style.display = "none";
  page3.style.display = "none";

  selectionsPage.classList.remove('modal-content-right-slide')
  selectionsPage.classList.add('modal-content-left-slide')
}
