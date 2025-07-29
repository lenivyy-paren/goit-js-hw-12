import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const inputValue = event.target.elements['search-text'].value.trim();

  if (inputValue === '') {
    iziToast.show({
      message: 'Form field must be filled in!',
      titleColor: 'red',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const response = await getImagesByQuery(inputValue);
    const images = response.hits || [];

    if (images.length > 0) {
      createGallery(images);
    } else {
      iziToast.show({
        message: 'Try another way',
        titleColor: 'red',
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.show({
      message:
        'Something went wrong. Please check your connection or try again later.',
      titleColor: 'red',
      position: 'topRight',
    });
    console.error('Fetch error:', error);
  } finally {
    hideLoader();
    form.reset();
  }
});
