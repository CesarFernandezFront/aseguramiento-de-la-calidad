const loader = document.getElementById('loader');
const homePanel = document.getElementById('home');
const navButtons = document.querySelectorAll('.panel__content--nav .btn');
const closeButtons = document.querySelectorAll('.panel__content .close');
const goToButtons = document.querySelectorAll('button.go-to');

const addClassHome = () => homePanel.classList.add('view');
const removeClassHome = () => homePanel.classList.remove('view');

window.addEventListener('load',function(){
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
    const previousSibling = closeButton.previousElementSibling;  
    const firstElement = previousSibling.querySelector('*');
    setTimeout(function(){
      firstElement.scrollIntoView({ behavior: 'smooth' });
    }, 600);

    addClassHome();
  };  
});

goToButtons.forEach(function(goToButton) {
  goToButton.onclick = () => {
    const idGo = goToButton.dataset.go;

    // const parentElement = goToButton.parentNode;
    // console.log(parentElement);
    // const toGo = parentElement.querySelector('#'+idGo);
    // console.log(toGo);

    const toGo = document.querySelector('#'+idGo);
    // toGo.scrollIntoView({ behavior: 'smooth' });
    toGo.scrollIntoView({
      behavior: 'smooth',
      options: {
        duration: 1000
      }
    });
    
  };  
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('#splide', {
    type         : 'loop',
    perPage      : 1,
    autoplay     : true,
    interval     : 8000,
    autoHeight   : true,
    focus        : 'center',
    pauseOnHover : false,
    // pauseOnFocus : false,
    resetProgress: false,
    lazyLoad: 'nearby',
    // easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  }).mount();

  const button = document.querySelector('.splide__play-pause');

  if (button) {
    const pausedClass = 'is-paused';

    // Remove the paused class and change the label to "Pause".
    splide.on('autoplay:play', function () {
      button.classList.remove(pausedClass);
      button.textContent = 'pause_circle';
      button.setAttribute('aria-label', 'Pause Autoplay');
    });
    

    // Add the paused class and change the label to "Play".
    splide.on('autoplay:pause', function () {
      button.classList.add(pausedClass);
      button.textContent = 'play_circle';
      button.setAttribute('aria-label', 'Start Autoplay');
    });

    // Toggle play/pause when the button is clicked.
    splide.on('click', function () {
      const flag     = 99;
      const Autoplay = splide.Components.Autoplay;

      if (button.classList.contains(pausedClass)) {
        Autoplay.play(flag);
      } else {
        Autoplay.pause(flag);
      }
    }, button);
  }
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
