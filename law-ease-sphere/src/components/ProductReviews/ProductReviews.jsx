import { Container } from "react-bootstrap";
import "./product-review.css";

const ProductReviews = ({ selectedProduct }) => {
  // Function to format description text
  const formatDescription = (description) => {
    return description.split('\n').map((line, index) => {
      // Increase font size for numbers
      if (/^\d+\./.test(line)) {
        return <p key={index} style={{ fontSize: '1.2em' }}>{line}</p>;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  return (
    <section className="product-reviews">
      <Container>
        <ul>
          <li>
            <b style={{ fontSize: 23 }}><u>Description</u></b>
          </li>
        </ul>
        {/* Render formatted description */}
        {formatDescription(selectedProduct?.description)}
      </Container>
    </section>
  );
};

export default ProductReviews;
