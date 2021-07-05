import React from "react";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  } 

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((resolve) => {//////////
      setCards(() => cards.filter((c) => c._id !== card._id));
    })
  }

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((result) => console.log(`${result} при загрузке данных с сервера`));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="фотография владельца профиля" />
        </button>
        <div className="profile__info">
          <div className="profile__main">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
          </div>
          <p className="profile__subtitle" id="caption">
            {currentUser.about}
          </p>
        </div>
        <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card onCardDelete={handleCardDelete} onCardLike={handleCardLike} card={card} key={card._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
 
