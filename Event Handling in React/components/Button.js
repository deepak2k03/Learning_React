const Button = ( {imageURL,ButtonName,clickHandler} ) => (
    <button title={ButtonName} onClick={clickHandler}>
      <img src={imageURL} alt={ButtonName} />
    </button>
  );
  export default Button;
