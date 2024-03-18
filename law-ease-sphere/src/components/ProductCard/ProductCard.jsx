import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ productItem }) => {
  const router = useNavigate();

  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };
  
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img
        loading="lazy"
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.productName}</h3>
        <div className="d-flex justify-content-between align-items-center">
          <div className="price">
            <h4>₹{productItem.price}</h4>
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => handelClick()}>Know More</button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
