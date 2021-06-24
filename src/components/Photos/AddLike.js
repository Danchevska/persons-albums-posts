import React, { useEffect } from "react";
import PhotoReducer from "../../store/reducers/PhotosReducer"
import { ADD_LIKE_TO_PHOTO, ADD_DISLIKE_TO_PHOTO } from "../../store/typesList";
import { connect } from "react-redux";
//import { editPhoto } from "../../store/actions/photo";

const AddLike = ({ photo, addLike, addDislike, setEditedPhoto }) => {
  useEffect(() => {
    console.log(photo);
  }, [photo]);
  const addNewLike = (event) => {
    event.preventDefault();
    addLike(photo.id);
    
  };

  const addNewDislike = (event) => {
    event.preventDefault();
    addDislike(photo.id);
    
  };

  return (
    <div>
      <button value={photo.like} onClick={addNewLike}>Like({photo.like})</button>
      <button value={photo.like} onClick={addNewDislike}>DisLike({photo.dislike})</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: (id) => dispatch({ type: ADD_LIKE_TO_PHOTO, payload: id }),
    addDislike: (id) => dispatch({ type: ADD_DISLIKE_TO_PHOTO, payload: id }),
    
  };
};

export default connect(null, mapDispatchToProps)(AddLike);