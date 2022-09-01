import "../styles/BotonClear.css";

const BotonClear = (props) => {
  return (
    <div className="boton-clear" onClick={props.handleClick}>
      {props.children}
    </div>
  );
};

export default BotonClear;
