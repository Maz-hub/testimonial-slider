import { useState } from "react";
import tanyaImg from "./assets/image-tanya.jpg";
import johnImg from "./assets/image-john.jpg";
import Testimonial from "./components/Testimonial.jsx";

const testimonalData = [
  {
    quote:
      "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    name: "Tanya Sinclair",
    role: "UX Engineer",
    image: tanyaImg,
  },
  {
    quote:
      "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    image: johnImg,
  },
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // button increment the currentIndex
  const handleNext = () => {
    if (currentIndex === testimonalData.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };
// button decrement the currentIndex
  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(testimonalData.length - 1)
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <Testimonial testimonial={testimonalData[currentIndex]}
      onNext={handleNext}
      onPrev={handlePrev}
      />
    </>
  );
}

export default App;
