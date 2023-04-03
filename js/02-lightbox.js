import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const itemImages = document.querySelector('.gallery');

const makeup = galleryItems.map((image) => `<li class="gallery__item">
<a class="gallery__link" href="${image.original}">
   <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
</a>
</li>`).join("");
itemImages.insertAdjacentHTML("beforeend", makeup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });
