import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

export function createGallery(images) {
  const imagesArr = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
              <a class="gallery-link" href=${largeImageURL}>
                <img src=${webformatURL} alt="${tags}" width="360" height="200"/>
                <div class="markup-image">
                  <ul>
                    <li class="markup-image-text">likes</li>
                    <li class="markup-image-value">${likes}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">views</li>
                    <li class="markup-image-value">${views}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">comments</li>
                    <li class="markup-image-value">${comments}</li>      
                  </ul>
                  <ul>
                    <li class="markup-image-text">downloads</li>
                    <li class="markup-image-value">${downloads}</li>      
                  </ul>
                </div>
              </a>
            </li>`
    )
    .join('');

  gallery.innerHTML = imagesArr;
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.add('visible');
}

export function hideLoader() {
  loader.classList.remove('visible');
}
