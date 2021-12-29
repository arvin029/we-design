
// Mobile Menu

let burgerMenu = document.getElementById('hamburguer-icon');
let closeMenu = document.getElementById('sliding-header-menu-close-button');

burgerMenu.addEventListener('click', function() {
  document.getElementById('sliding-header-menu-outer').style.right = "0";
})

closeMenu.addEventListener('click', function() {
  document.getElementById('sliding-header-menu-outer').style.right = "-320px";
})

let menuListItem = document.getElementsByClassName('list-item');
for (let i = 0; i < menuListItem.length; i++) {
  menuListItem[i].addEventListener('click', function() {
    document.getElementById('sliding-header-menu-outer').style.right = -320 + 'px';
  });
}




// About us Tab

var aboutUs = {
  "Mission": "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

let aboutUsTab = document.getElementsByClassName('single-tab');

for (let i = 0; i < aboutUsTab.length; i++) {

  aboutUsTab[i].addEventListener('click', function() {

    let textElementValue = aboutUs[aboutUsTab[i].innerHTML];
    document.getElementById('box-text').innerHTML = textElementValue;

    for (let j = 0; j < aboutUsTab.length; j++) {

      aboutUsTab[j].style.backgroundColor = unseletectedColor;
      aboutUsTab[j].style.fontWeight = "normal";
   
    }
    aboutUsTab[i].style.backgroundColor = seletectedColor;
    aboutUsTab[i].style.fontWeight = "bold";

  })
}


// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];

let nextButton = document.getElementById('service-next');
let previousButton = document.getElementById('service-previous');

let currentService = 0;

nextButton.addEventListener('click', function() {

  if (currentService == (ourServices.length -1)) {

    currentService = 0;

  } else {

    currentService +=1;

  }

  let serviceTitle = ourServices[currentService].title;
  let serviceText = ourServices[currentService].text;

  document.getElementById('service-title').innerHTML = serviceTitle;
  document.getElementById('service-text').innerHTML = serviceText;
 
})

previousButton.addEventListener('click', function() {

  if (currentService == 0) {

    currentService = ourServices.length -1;

  } else {

    currentService -=1;

  }
  
  let serviceTitle = ourServices[currentService].title;
  let serviceText = ourServices[currentService].text;

  document.getElementById('service-title').innerHTML = serviceTitle;
  document.getElementById('service-text').innerHTML = serviceText;

})



// Footer

let currentDate = new Date();
document.getElementById('current_year').innerHTML = currentDate.getFullYear();

  
   


   