// Get the modal
var openingPage = document.getElementById('opening-page')
var selectionsPage = document.getElementById('selections-page')
var page3 = document.getElementById('myModal2')


// Get the button that opens the modal
var exploreBtn = document.getElementById("explore");

// When the user clicks the button, open the modal 
exploreBtn.onclick = function() {
  selectionsPage.style.display = "block";
  openingPage.style.display = "none";
}


var demo = document.getElementById('demo')



// modal 2 or page 3 vars and stuff AND handling 
var minusBtn = document.getElementById('minus')
var plusBtn = document.getElementById('plus')
var numberItems = document.getElementById('number-items')
var itemsCount = 1;



// add or subtract the number of bottles
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


// going back to page2 from descriptions page
var backToPageTwoBtn = document.getElementById('backToPage2')

backToPageTwoBtn.onclick = function() {
  selectionsPage.style.display = "block";
  openingPage.style.display = "none";
  page3.style.display = "none";

  selectionsPage.classList.remove('modal-content-right-slide')
  selectionsPage.classList.add('modal-content-left-slide')
}



// --- selecting each individual bottle --- //
const items = document.querySelectorAll('.single-bottle-container')

// select where the content will go
const alcContent = document.getElementById('alc-content');
const volumeContent = document.getElementById('volume-content');
const acidContent = document.getElementById('acid-content');
const pHContent = document.getElementById('pH-content');
const description = document.getElementById('description-content');
const bottlePrice = document.getElementById('price-content');
const bottleName = document.getElementById('bottleName');
const bottleImg = document.getElementById('bottle-image');


// cycle through clicks on each item 
for (let i=0; i<items.length; i++) {
  items[i].addEventListener('click', function() {
    var newAlc = items[i].querySelector('.alcohol').innerHTML;
    var newVol = items[i].querySelector('.volume').innerHTML;
    var newAcid = items[i].querySelector('.acidity').innerHTML;
    var newPH = items[i].querySelector('.pH').innerHTML;
    var newDesc = items[i].querySelector('.describe').innerHTML;
    var newPrice = items[i].querySelector('.price').innerHTML;
    var newName = items[i].querySelector('.bottle-name').innerHTML;
    var newImg = items[i].querySelector('img').src;

    // place the info in the correct spot 
    alcContent.innerHTML = newAlc;
    volumeContent.innerHTML = newVol;
    acidContent.innerHTML = newAcid;
    pHContent.innerHTML = newPH;
    description.innerHTML = newDesc;
    bottlePrice.innerHTML = newPrice;
    bottleName.innerHTML = newName;
    bottleImg.src = newImg;

    // show the pages on the click
    page3.style.display = "block";
    openingPage.style.display = "none";
    selectionsPage.style.display = "none";
  })
}



/// ---> OPEN the shopping cart>
const shoppingCartModal = document.getElementById('shopping-cart-modal')

const shoppingCartBtn = document.querySelectorAll('.shopping-cart-icon')
  for(let i=0; i<shoppingCartBtn.length; i++) {
    shoppingCartBtn[i].addEventListener('click', function() {
      page3.style.display = 'none';
      selectionsPage.style.display = 'none';


      shoppingCartModal.style.display = 'block';
      shoppingCartModal.classList.add('fade-in');
      shoppingCartModal.classList.remove('fade-out')
    })
  }

/// ---> CLOSE the shopping cart>
const closeBtn = document.getElementById('close');

closeBtn.addEventListener('click', function() {
    shoppingCartModal.classList.add('fade-out');
    shoppingCartModal.classList.remove('fade-in')
    shoppingCartModal.style.display = 'none';
    selectionsPage.style.display = 'block';
});





/// get the price on the page and the number of items desired
const price = page3.querySelector("#price-content")
//const quantWantToPurch = page3.querySelector('#number-itmes').innerText

const addBtn = document.getElementById('addToCart');
var totalPrice = document.getElementById('total-price');
let total = 0;

function addItems() {
    var row = table.insertRow(table.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    var product = document.getElementById('bottleName').innerText;
    var quantity = document.getElementById('number-items').innerText;
    var price = document.getElementById('price-content').innerText;

    var itemsTotalPrice = (Number(price.slice(1)) * Number(quantity)).toFixed(2)

    cell1.innerHTML = product;
    cell2.innerHTML = quantity;
    cell3.innerHTML = price;
    cell4.innerHTML = `$${itemsTotalPrice}`;

    let addedPrice = itemsTotalPrice;
    
    total += Number(addedPrice);
    totalPrice.innerHTML = total.toFixed(2);

    // reset the quantity to 1
    numberItems.innerHTML = 1;
    itemsCount = 1
}

addBtn.addEventListener('click', addItems)





/// ----- clear the entire cart 
const clearBtn = document.getElementById('clear');


// reset the top headers
clearBtn.addEventListener("click", function () {
  table.innerHTML = `
          <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price per item</th>
              <th>Total price</th>
          </tr>
  `
  total = 0;
  totalPrice.innerHTML = 0.00
})


