import { Component } from 'react';
import { GalleryItemImage } from './ImageGalleryItem.styled';
import { ImgModal } from '../Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { imageUrl, alt, imageLargeURL } = this.props;

    return (
      // <GalleryItemStyle>
      <li className="ImageGalleryItem">
        <GalleryItemImage
          src={imageUrl}
          alt={alt}
          // width="240"
          onClick={this.openModal}
        />
        {this.state.isModalOpen && (
          <ImgModal
            imgLargeURL={imageLargeURL}
            alt={alt}
            isModalOpen={this.state.isModalOpen}
            onClose={this.closeModal}
          />
        )}
      </li>
      // </GalleryItemStyle>
    );
  }
}
