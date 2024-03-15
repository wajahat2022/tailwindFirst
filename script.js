
  // Get the list items
  const navItems = document.querySelectorAll('.nav-lists li');
console.log(navItems);
  // Get all the togglingRequired divs
  const togglingRequiredDivs = document.querySelectorAll('.togglingRequired > div');

  // Function to hide all togglingRequired divs
  function hideAllDivs() {
    togglingRequiredDivs.forEach(div => {
      div.style.display = 'none';
    });
  }

  // Add click event listener to each list item
  navItems.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
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

