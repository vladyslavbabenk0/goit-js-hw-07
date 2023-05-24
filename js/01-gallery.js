import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createGalleryItems (galleryItems) {
    let galleryElements = galleryItems.map(item => {
       let galleryItem = document.createElement('li');
       galleryItem.classList.add('gallery__item');

       let galleryLink = document.createElement('a');
       galleryLink.classList.add('gallery__link');
       galleryLink.href = item.original;

       let galleryImg = document.createElement('img');
       galleryImg.classList.add('gallery__image');
       galleryImg.src = item.preview;
       galleryImg.dataset.source = item.original;
       galleryImg.alt = item.description;
       galleryLink.appendChild(galleryImg);

       galleryItem.appendChild(galleryLink);

       return galleryItem;
    });
    galleryEl.append(...galleryElements);
    
}
createGalleryItems(galleryItems);

let instance;

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
      }
  
    instance = basicLightbox.create(`
      <img src='${event.target.dataset.source}' width="800" height="600">
   `)
    instance.show()
};

galleryEl.addEventListener('click', onGalleryClick);

function onKeyPress(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  }
  
  window.addEventListener('keydown', onKeyPress);
