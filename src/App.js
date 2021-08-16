import React, {
  useState,
  // useEffect
} from "react";
import Searchbar from "./components/searchbar/Searchbar";
import ImageGallery from "./components/imageGallery/ImageGallery";
import Modal from "./components/modal/Modal";
import LoaderSpinner from "react-loader-spinner";
import ApiService from "./services/ApiService";
import Button from "./components/button/Button";

const initialState = {
  photos: [],
  currentPage: 1,
  searchQuery: "",
  isLoading: false,
  largeImage: "",
  error: null,
};

// useEffect(() => {
//   return () => {
//     effect
//   };
// }, [input])
//============вместо didUpdate===========
// componentDidUpdate(prevProps, prevState) {
//   if (prevState.searchQuery !== this.state.searchQuery) {
//     this.fetchPhotos();
//   }
// }

const App = () => {
  const [state, setState] = useState(initialState);

  const addLargeImg = (largeImgUrl) => {
    setState((prev) => ({ ...prev, largeImage: largeImgUrl }));
  };

  const onChangeQuery = (query) => {
    setState((prev) => ({
      ...prev,
      searchQuery: query,
      currentPage: 1,
      photos: [],
      error: null,
    }));
  };

  const fetchPhotos = () => {
    const { searchQuery, currentPage } = state;
    const options = { searchQuery, currentPage };

    setState((prev) => ({ ...prev, isLoading: true }));

    ApiService.fetchPhotos(options)
      .then((photos) => {
        setState((prev) => ({
          ...prev,
          photos: [...prev.photos, ...photos],
          currentPage: prev.currentPage + 1,
        }));
      })
      .catch((error) => {
        setState((prev) => ({ ...prev, error }));
      })
      .finally(() => {
        setState((prev) => ({ ...prev, isLoading: false }));
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
  };

  const toggleModal = () => {
    setState((prev) => ({ ...prev, largeImage: !largeImage }));
  };

  const { photos, isLoading, error, largeImage } = state;
  const shouldRenderLoadMoreBtn = photos.length > 0 && !isLoading;

  return (
    <div className="App">
      {error && <h2>Something went wrong. Try again</h2>}
      {largeImage && <Modal onClose={toggleModal} largeImageURL={largeImage} />}
      <Searchbar onSubmit={onChangeQuery} />

      <ImageGallery photos={state.photos} addLargeImg={addLargeImg} />

      {isLoading && <LoaderSpinner />}

      {shouldRenderLoadMoreBtn && <Button fetchPhotos={fetchPhotos} />}
    </div>
  );
};

export default App;
