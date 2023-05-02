import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const li = document.createElement('li');
  const link = document.createElement('a');
  const img = document.createElement('img');

  li.classList.add('gallery__item');
  link.classList.add('gallery__link');
  img.classList.add('gallery__image');

  link.href = item.original;
  img.src = item.preview;
  img.alt = item.description;

  link.appendChild(img);
  li.appendChild(link);
  gallery.appendChild(li);
});

const galleryItemsNodes = document.querySelectorAll('.gallery__link');
new SimpleLightbox(galleryItemsNodes, {
  captions: true,
  captionDelay: 250,
});
