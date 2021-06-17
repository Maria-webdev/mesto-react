function Main({onEditAvatar, onEditProfile, onAddPlace}) {
 
  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-edit-button" onClick={onEditAvatar}>
          <img className="profile__avatar" src="#" alt="фотография владельца профиля" />
        </button>
        <div className="profile__info">
          <div className="profile__main">
            <h1 className="profile__title">тест</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
          </div>
          <p className="profile__subtitle" id="caption">тест</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="elements">
        <template id="element-template">
          <div className="element">
            <img className="element__pic" src="#" alt="#" />
            <button className="element__delete-button" type="button"></button>
            <div className="element__info">
              <h2 className="element__title"></h2>
              <div className="element__group">
                <button className="element__like-button" type="button"></button>
                <div className="element__count"></div>
              </div>
            </div>
          </div>
        </template>
      </section>
    </main>
  );
  
}

export default Main;
