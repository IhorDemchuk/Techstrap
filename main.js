'use strict';

let logo_text = document.querySelector('.text');
let header_description = document.querySelector('.header_description');
let try_it = document.querySelector('.try_it');
let screen_width = this.screen.width;

function remove_class() {
   if (screen_width <= 500) {
      logo_text.classList.remove('hidden')
   }
   new Promise((resolve) => {
      setTimeout(() => {
         logo_text.classList.remove('hidden')
         resolve()
      }, 1500)
      setTimeout(() => {
         header_description.style.opacity = 1;
         resolve()
      }, 2000)
      setTimeout(() => {
         try_it.style.opacity = 1;
         resolve()
      }, 3000)
   })
}

remove_class(screen_width);