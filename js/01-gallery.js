import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryImages = document.querySelector('.gallery');

function galleryMarkup (items) {
    return items.map((item) => `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>`).join("");
}

const addGalleryMarkup = galleryMarkup(galleryItems);
galleryImages.innerHTML = addGalleryMarkup;

galleryImages.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();

    if(event.target.nodeName !== "IMG"){
        return;
    }

    const intanse = basicLightbox.create(`
    <img src = "${event.target.dataset.source}" width = "800" height = "600">
    `);
    intanse.show();

    galleryImages.addEventListener("keydown", (event) => {
        if(event.code === "Escape"){
            intanse.close();
        }
    })

}



