const ImageComponent = ({ img, title }) => {
  return (
    <div className="row">
      <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ImageComponent;
