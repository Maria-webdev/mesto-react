const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_${props.name}`}>
      <button className="popup__close-button" type="button"></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className="popup__form" name={props.name} noValidate>
        <button className="popup__button" type="submit">
        </button>
      </form>
    </div>
  );
};
  
export default PopupWithForm;

