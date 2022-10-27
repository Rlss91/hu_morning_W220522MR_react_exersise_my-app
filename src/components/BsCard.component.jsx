import BsBtnComponent, { bsBtnOptions } from "./BsBtn.component";
import "./BsCard.component.scss";

const BsCardComponent = ({ img, title, description, btn, id, onDelete }) => {
  const handleBtnClick = () => {
    onDelete(id);
  };
  return (
    <div className="card">
      {img && <img src={img} className="card-img-top" alt={title} />}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <BsBtnComponent color={bsBtnOptions.danger} onClick={handleBtnClick}>
          {btn}
        </BsBtnComponent>
      </div>
    </div>
  );
};
export default BsCardComponent;
