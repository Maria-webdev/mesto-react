import React, { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = useState({});

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => console.log(err));
  }, []);

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className="page__container">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
        </div>

        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} name={"edit"} title={"Редактировать профиль"} submitText={"Сохранить"}>
          <input className="popup__input popup__input_type_name" type="text" id="name" name="name" required minLength="2" maxLength="40" placeholder="Имя" />
          <span className="popup__error" id="name-error"></span>
          <input className="popup__input popup__input_type_about" type="text" id="about" name="about" required minLength="2" maxLength="200" placeholder="О Себе" />
          <span className="popup__error" id="about-error"></span>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} name={"add"} title={"Новое место"} submitText={"Сохранить"}>
          <input className="popup__input popup__input_type_place-name" id="place" type="text" name="place" placeholder="Название" required minLength="2" maxLength="30" />
          <span className="popup__error" id="place-error"></span>
          <input className="popup__input popup__input_type_URL" id="url" type="url" name="url" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="url-error"></span>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} name={"avatar"} title={"Обновить аватар"} submitText={"Сохранить"}>
          <input className="popup__input popup__input_type_URL popup__input_type_url-avatar" id="url-avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="url-avatar-error"></span>
        </PopupWithForm>

        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups} />
      </>
    </CurrentUserContext.Provider>
  );
}

export default App;
