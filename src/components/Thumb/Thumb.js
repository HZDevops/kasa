import "./Thumb.css";

function Thumb({ id, image, title }) {
  return (
    <div className="kasa-thumb" id={id}>
      <img className="thumb-image" src={image} alt="Thumb" />
      <div className="thumb-dark"></div>
      <span className="thumb-title">{title}</span>
    </div>
  );
}

export default Thumb;
