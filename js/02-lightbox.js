import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

// Функція для рендеру розмітки

function createGalleryMarkup(galleryItems) {
return galleryItems.map(({preview, original, description}) => 
  { return `
  <div class="gallery__item">
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
  </div>
  `
  }).join("")
}
// додаю розмітку в документ
gallery.insertAdjacentHTML('beforeend', galleryMarkup);

// Галерея за допомогою плагіна SimpleLightbox (не потребує прослуховування кліків, розмітка будь яка) 

let simpleGallery = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: "250ms" });

