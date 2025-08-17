import prevIcon from "../assets/icon-prev.svg";
import nextIcon from "../assets/icon-next.svg";
import quoteIcon from "../assets/pattern-quotes.svg";
import patternBg from "../assets/pattern-bg.svg";
import patternCurve from "../assets/pattern-curve.svg";

const Testimonial = ({ testimonial, onNext, onPrev }) => {
  return (
    <>
      <div className="testimonial">
        {/* Left side / Top */}
        <div className="testimonial__content">
          <img src={quoteIcon} alt="Qoute Icon" />
          <blockquote className="testimonial__text">
            {testimonial.quote}
          </blockquote>
          <div className="testimonial__author">
            <p className="testimonial__name">{testimonial.name}</p>
            <p className="testimonial__title">{testimonial.role}</p>
          </div>
        </div>
        {/* Right side / Bottom */}
        <div className="testimonial__image-container">
          <img
            className="testimonial__image"
            src={testimonial.image}
            alt={`Photo of ${testimonial.name}`}
          />
          <img src={patternBg} alt="" className="testimonial__pattern-bg" />
          <img
            src={patternCurve}
            alt=""
            className="testimonial__pattern-curve"
          />
        </div>
        {/* Buttons */}
        <div className="testimonial__nav">
          <button onClick={onPrev} className="btn_Prev">
            <img src={prevIcon} alt="Previous" />
          </button>
          <button onClick={onNext} className="btn_Next">
            <img src={nextIcon} alt="Next" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
