import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
 
function App() {
  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      <head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="keywords" content="Путешествия Места Фотографии"/>
    <meta name="description" content="9я проектная работа Марии Авериной на курсе Яндекс.Практикум"/>
    <title>Mesto Russia</title>
  </head>*/
 
 <div className="App">


  <div className="page">
    <div className="page__container">
      <Header />
      <Main />
      <Footer />
    </div>

    <div className="popup popup_edit">
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

    <div className="popup popup_add">
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

    <div className="popup popup-pic">
      <div className="popup-pic__container">
        <img className="popup-pic__image" alt="#" src="#" />
        <h3 className="popup-pic__title"></h3>
        <button className="popup__close-button popup__close-button_pic" type="button"></button>
      </div>
    </div>

    <div className="popup popup_delete">
      <form className="popup__content">
        <button className="popup__close-button popup__close-button_delete" type="button"></button>
        <h2 className="popup__title popup__title_delete">Вы уверены?</h2>
        <button className="popup__button popup__button-yes" type="submit">Да</button>
      </form>
    </div>

    <div className="popup popup_avatar">
      <div className="popup__content">
        <button className="popup__close-button popup__close-button_avatar" type="button"></button>
        <h2 className="popup__title">Обновить аватар</h2>
        <form className="popup__form popup__form_type_avatar" name="form-avatar" noValidate>
          <input className="popup__input popup__input_type_URL popup__input_type_url-avatar" id="url-avatar" type="url" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="popup__error" id="url-avatar-error"></span>
          <button className="popup__button popup__button_avatar popup__button_inactive" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    
  </div>
</div>

  );
}

export default App;
