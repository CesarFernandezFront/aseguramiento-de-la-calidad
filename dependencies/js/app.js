const loader = document.getElementById('loader');
const homePanel = document.getElementById('home');
const navButtons = document.querySelectorAll('.panel__content--nav .btn');
const closeButtons = document.querySelectorAll('.panel__content .close');

const addClassHome = () => homePanel.classList.add('view');
const removeClassHome = () => homePanel.classList.remove('view');

const closePanel = () => {
  addClassHome();
  additionalFunction();  // Call the new function
};

window.addEventListener('load',function(){
  console.log('LOAD')
  // homePanel.classList.add('view');
  addClassHome();
  // loader.style.display = "none";
  loader.classList.add('hidden');
});

navButtons.forEach(function(navButton) {
  navButton.addEventListener('click', removeClassHome);
});

closeButtons.forEach(function(closeButton) {
  // closeButton.addEventListener('click', addClassHome);

  closeButton.onclick = () => {
    console.log('close');
    const previousSibling = closeButton.previousElementSibling;  
    const firstElement = previousSibling.querySelector('*');
    firstElement.scrollIntoView({ behavior: 'smooth' });

    addClassHome();
  };  
});






/*
var rootElement = document.documentElement;
var verde = 'green';

rootElement.style.setProperty("--verde", verde);

var root = document.documentElement;
root.style.setProperty('--color', colores[n % colores.length]);
*/
    

// ****


// const element = document.getElementById('myElement');
// const elementHeight = element.offsetHeight; // Get the element's height

// const windowHeight = window.innerHeight; // Get the window height (similar to 100vh)
// const desiredMaxHeight = windowHeight - 70; // Calculate desired max-height (70 can be any unit)

// element.style.maxHeight = `calc(${desiredMaxHeight}px - ${elementHeight}px)`;        
