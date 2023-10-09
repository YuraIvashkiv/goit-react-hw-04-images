import { GalleryItemImage } from './ImageGalleryItem.styled';
import { ImgModal } from '../Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({ imageUrl, alt, imageLargeURL }) => {
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const openModal = () => setIsModalOpen(true);
//  const closeModal = () => setIsModalOpen(false);

  return (
    <li className="ImageGalleryItem">
      <GalleryItemImage
        src={imageUrl}
        alt={alt}
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <ImgModal
          imgLargeURL={imageLargeURL}
          alt={alt}
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </li>
  );
};
