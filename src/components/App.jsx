import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { AppStyle } from './App.styled';
import { getPictures } from './api';
import { Loader } from './Loader/Loader';
import { useEffect, useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loadingImgCount, setLoadingImgCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);



    const changeQuery = newQuery => {
      setQuery( `${Date.now()}/${newQuery}`
      );
      console.log(`${Date.now()}/${newQuery}`);
      setImages([]);
      setPage( 1);
    };

  useEffect(() => {
    
    if (query === '') 
      return;
     getImages(); 
    
    async function getImages() {
       const result = query.slice(query.indexOf('/') + 1);
      try {
        setIsLoading(true);
                const data = await getPictures(result, page);

        setImages(prevState => [...prevState, ...data.hits]);
                 setLoadingImgCount( Math.ceil(data.totalHits / 12),
         );
       } catch (error) {
         console.error('Помилка при отриманні даних:', error);
       } finally {
         setIsLoading(false);
       }          
    }
   
  }, [page,query])
  


  const handleLoadMore = () => {
    setPage(prevState =>
     prevState + 1 );
 };

  return (
    <AppStyle>
      <Searchbar onSubmit={changeQuery} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      <div>
        {images.length !== 0 &&
          loadingImgCount !== page && (
            <Button onClick={handleLoadMore} />
          )}
      </div>
    </AppStyle>
  );
};
