import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppStyle } from './App.styled';
import { getPictures } from './api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loadingImgCount: 0,
    isLoading: false,
  };

  changeQuery = newQuery => {
    this.setState(prevState => ({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const newQuery = this.state.query;
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      const result = newQuery.slice(newQuery.indexOf('/') + 1);

      this.setState({ isLoading: true });

      try {
        const data = await getPictures(result, this.state.page);

        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          loading: false,
          loadingImgCount: Math.ceil(data.totalHits / 12),
        }));
      } catch (error) {
        console.error('Помилка при отриманні даних:', error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && <Loader />}
        <div>
          {this.state.images.length !== 0 &&
            this.state.loadingImgCount !== this.state.page && (
              <Button onClick={this.handleLoadMore} />
            )}
        </div>
      </AppStyle>
    );
  }
}
