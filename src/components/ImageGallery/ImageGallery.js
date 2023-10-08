import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryStyle } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    // <GalleryStyle>
    <GalleryStyle className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          imageLargeURL={image.largeImageURL}
          alt={image.tags}
        />
      ))}
    </GalleryStyle>
    // {/* </GalleryStyle> */}
  );
};
