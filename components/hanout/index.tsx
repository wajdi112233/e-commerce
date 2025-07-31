import Carousel from "../Carousel";
import cardItems from "./card.json";
import Card from "../Card";
import carouselitem from "./carousel.json";

const Hanout = () => {
  return (
    <>
      <div className="bg-white h-100 "></div>
      <div>
        {cardItems.map((item) => (
          <Card item={item} />
        ))}
      </div>
      <Carousel items={carouselitem} />
    </>
  );
};

export default Hanout;
