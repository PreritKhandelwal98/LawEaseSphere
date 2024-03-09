import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../app/features/cart/cartSlice";

const ProductCard = ({ productItem }) => {
  // const dispatch = useDispatch();
  const router = useNavigate();
  const handelClick = () => {
    router(`/shop/${productItem.id}`);
  };
  // const handelAdd = (productItem) => {
  //   dispatch(addToCart({ product: productItem, num: 1 }));
  //   toast.success("Product has been added to cart!");
  // };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={productItem.imgUrl}
        alt=""
      />
      <div className="product-like">
        <ion-icon name="heart-outline"></ion-icon>
      </div>
      <div className="product-details">
        <h3 onClick={() => handelClick()}>{productItem.productName}</h3>
        <div className="price">
          <h4>₹{productItem.price}</h4>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;