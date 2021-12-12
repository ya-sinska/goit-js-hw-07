import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

gallery.addEventListener('click', onGalleryClick)

function createGalleryMarkup(galleryItems) {
return galleryItems.map(({preview, original, description}) => 
  { return `
  <div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
  `
  }).join("")
}

function onGalleryClick(e) {
  e.preventDefault()
  const imgItem = e.target.classList.contains('gallery__image');
  if (!imgItem) {
    return
  }
  console.log(e.target.dataset.source);

// Модалка їз зображенням через бібліотеку basicLightbox 
  
  const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

  instance.show(() => console.log('lightbox now visible'))

// закрытие модального окна по нажатию клавиши Escape
  
  document.addEventListener("keydown", event => {
    if (event.code === "Escape") {
    instance.close(() => console.log('lightbox not visible anymore'))
  }
});
}



