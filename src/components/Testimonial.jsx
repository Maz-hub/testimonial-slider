import prevIcon from "../assets/icon-prev.svg";
import nextIcon from "../assets/icon-next.svg";

const Testimonial = ({ testimonial, onNext, onPrev }) => {
  return (
    <>
      <div>
        <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} />
        <blockquote>{testimonial.quote}</blockquote>
        <h2>{testimonial.name}</h2>
        <p>{testimonial.role}</p>
        <button onClick={onPrev} className="btn_Prev">
          <img src={prevIcon} alt="Previous" />
        </button>
        <button onClick={onNext} className="btn_Next">
          <img src={nextIcon} alt="Next" />
        </button>{" "}
      </div>
    </>
  );
};

export default Testimonial;
