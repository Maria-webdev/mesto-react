import {React, useState} from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
/*import PopupWithForm from './PopupWithForm'; запуталась в пропсах*/
import ImagePopup from './ImagePopup';

 
function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    /*чтобы не потерять
      <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="keywords" content="Путешествия Места Фотографии"/>
    <meta name="description" content="10я проектная работа Марии Авериной на курсе Яндекс.Практикум"/>
    <title>Mesto Russia</title>
  </head>*/
 
 <div className="App">

  <div className="page">
    <div className="page__container">
      <Header />
      <Main 
      onEditProfile={setIsEditProfilePopupOpen}
      onAddPlace={setIsAddPlacePopupOpen}
      onEditAvatar={setIsEditAvatarPopupOpen} />
      <Footer />
    </div>

    <div className="popup popup_edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
      <div className="popup__content">
        <button className="popup__close-button popup__close-button_edit" type="button"></button>
        <h2 className="popup__title">Редактировать профиль</h2>
        <form className="popup__form popup__form_type_edit" name="edit" noValidate>
          <input className="popup__input popup__input_type_name" type="text" id="name" name="name" required minLength="2" maxLength="40" placeholder="Имя" />
          <span className="popup__error" id="name-error"></span>
          <input className="popup__input popup__input_type_about" type="text" id="about" name="about" required minLength="2" maxLength="200" placeholder="О Себе" />
          <span className="popup__error" id="about-error"></span>
          <button className="popup__button popup__button_edit" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
      <div className="popup__content">
        <button className="popup__close-button popup__close-button_add" type="button"></button>
        <h2 className="popup__title">Новое место</h2>
        <form className="popup__form popup__form_type_add" name="add" noValidate>
          <input className="popup__input popup__input_type_place-name" id="place" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__error" id="place-error"></span>
          <input className="popup__input popup__input_type_URL" id="url" type="url" name="url" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="url-error"></span>
          <button className="popup__button popup__button_add" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <div className="popup popup_delete">
      <div className="popup__content">
        <button className="popup__close-button popup__close-button_delete" type="button"></button>
        <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
        <form className="popup__form popup__form_type_delete" name="delete">
          <button className="popup__button popup__button-yes" type="submit">Да</button>
        </form>
      </div>
    </div>

    <div className="popup popup_avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
      <div className="popup__content">
        <button className="popup__close-button popup__close-button_avatar" type="button"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form popup__form_type_avatar" name="avatar" noValidate>
          <input className="popup__input popup__input_type_URL popup__input_type_url-avatar" id="url-avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="url-avatar-error"></span>
          <button className="popup__button popup__button_avatar popup__button_inactive" type="submit">Сохранить</button>
        </form>
      </div>
    </div>

    <ImagePopup  />    

      </div>
    </div>
    
  </div>
 </div>

  );
}

export default App;

