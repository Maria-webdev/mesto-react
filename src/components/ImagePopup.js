import React from 'react';

const ImagePopup = (props) => {{
  return (
    <div className="popup popup-pic">
     <div className="popup-pic__container">
        <img className="popup-pic__image" alt="#" src="#" />
        <h3 className="popup-pic__title"></h3>
        <button className="popup__close-button popup__close-button_pic" type="button"></button>
      </div>
    </div>

  );
}

export default ImagePopup;