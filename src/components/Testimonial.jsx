const Testimonial = ({ testimonial, onNext, onPrev }) => {
  return (
    <>
      <h2>{testimonial.name}</h2>
      <blockquote>{testimonial.quote}</blockquote>
      <p>{testimonial.role}</p>
      <img src={testimonial.image} alt={`Photo of ${testimonial.name}`} />
      <button onClick={onPrev} className="btn_Prev">
        Prev
      </button>
      <button onClick={onNext} className="btn_Next">
        Next
      </button>
    </>
  );
};

export default Testimonial;
