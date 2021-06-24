import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import photosInitial, { setPhotosToStorage } from "../data/photos";

import { getPosts } from "../store/actions/posts";
import { getAlbums } from "../store/actions/albbums";
import { getPhotos } from "../store/actions/photo";

import Navigation from "./Navigation";
import Pages from "../layouts/Pages";


export const GlobalContext = React.createContext(null);

const App = ({ initPosts, initAlbums, initPhotos }) => {
  useEffect(() => {
    initPosts();
    initAlbums();
    initPhotos();
  }, []);

  const [photos, setPhotos] = useState(photosInitial);

 

  return (
    <GlobalContext.Provider
      value={{
        photos,
        // addPhotoReaction,
      }}
    >
      <Navigation />
      <Pages />
    </GlobalContext.Provider>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    initPosts: () => dispatch(getPosts()),
    initAlbums: () => dispatch(getAlbums()),
    initPhotos: () => dispatch(getPhotos()),
  };
};

export default connect(null, mapDispatchToProps)(App);