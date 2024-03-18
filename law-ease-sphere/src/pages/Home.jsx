import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Home = () => {
  const newArrivalData = products.filter(
    (item) => item.category === "mobile" || item.category === "wireless"
  );
  const bestSales = products.filter((item) => item.category === "sofa");
  useWindowScrollToTop();
  return (
    <Fragment>
      <SliderHome />
      <Wrapper />
      <Section
        title="Our Services"
        bgColor="#f6f9fc"
        productItems={products}
      />
      <Section
        title="More Offering"
        bgColor="white"
        productItems={newArrivalData}
      />
      <Section title="Featured Products" bgColor="#f6f9fc" productItems={bestSales} />
    </Fragment>
  );
};

export default Home;