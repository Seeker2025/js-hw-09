import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from "./gallery-items";
// console.log(galleryItems);

const gallery = document.querySelector('.gallery');
// console.log(gallery);

const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
<li class="gallery-item">
	<a class="gallery-link" href="${preview}">
		<img 
		  class="gallery-image" 
		  src="${original}" 
		  alt="${description}" 
		/>
	</a>
</li>

    `;
}).join('');
gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('li.gallery-item a', {
     /* options */
    captionsData: 'alt',    //get the caption from given attribute
    captionDelay: 200,      //adds a delay before the caption shows (in ms)
    animationSpeed: 250,    //how long takes the slide animation (in ms)
    scaleImageToRatio: true,//scales the image up to the defined ratio size
   
});
