
  // Get the list items
  const navItems = document.querySelectorAll('.nav-lists li');
  const burgerMenu = document.querySelector('.burget-menu');
const body = document.querySelector('.grid-container');
const mainBody = document.querySelector('.main'); 
const navItemsMob = document.querySelectorAll('ul.nav-lists-mobile.nav-lists-mobile-Updated li'); 
console.log(navItemsMob);

const navMobile = document.querySelector('.nav-mobile'); 
  // Get all the togglingRequired divs
  const togglingRequiredDivs = document.querySelectorAll('.togglingRequired > div');

  // Function to hide all togglingRequired divs
  function hideAllDivs() {
    togglingRequiredDivs.forEach(div => {
      div.style.display = 'none';
    });
  }
  function burgerFunctioning() { 
    console.log('updated clicked yes!');
    body.classList.toggle('backgroundColoring');
    navMobile.classList.toggle('hidden');
    mainBody.classList.toggle('hidden');
    burgerMenu.classList.toggle('close');
    if (burgerMenu.classList.contains('close')) {
      // If the cross icon is displayed, hide the burger icon
      burgerMenu.innerHTML = ''; // Remove the content of the burger menu
  } else {
      // If the burger icon is displayed, show the burger icon
      burgerMenu.innerHTML = '&#9776;'; // Set the content of the burger menu
  }
  }
  // Add click event listener to each list item


    navItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        console.log(item);
        const id = this.getAttribute('id'); // Get the ID of the clicked item
         console.log(id);
        const targetDiv = document.getElementById(id + 'Container'); // Get the corresponding div
       console.log(targetDiv); 
        if (targetDiv) {
          hideAllDivs(); // Hide all divs first
          targetDiv.style.display = ''; // Show the target div
        }
      });
    });

    navItemsMob.forEach(item => {
      console.log(item);
      item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        const id = this.getAttribute('swtich_attrib'); // Get the ID of the clicked item
      console.log(id);
        const targetDiv = document.getElementById(id + 'Container'); // Get the corresponding div
       console.log(targetDiv); 
        if (targetDiv) {
          hideAllDivs(); // Hide all divs first
          targetDiv.style.display = ''; // Show the target div
          burgerFunctioning();
        }
      });
    });

  burgerMenu.addEventListener('click', burgerFunctioning);
