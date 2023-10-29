// Add imports above this line
import { galleryItems } from './gallery-items';

// Описаний в документації
import SimpleLightbox from 'simplelightbox';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryCardsSet = createGallery(galleryItems);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item" style="border-radius: 4px; background: transparent; box-shadow: none;">
  <a class="gallery__item" href="${original}" style= "box-shadow: none;" style="border-radius: 4px;">
  <img class="gallery__image" src="${preview}" alt="${description}" style="border: 1px solid transparent;
  border-radius: 4px;
  padding: 5px; background: rgba(255, 255, 255, 0.3); box-shadow: 0px 1px 3px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 2px 1px -1px rgb(0 0 0 / 12%);"/>
</a>
</div>`;
    })
    .join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryCardsSet);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
