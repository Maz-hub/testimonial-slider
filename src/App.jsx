import { useState } from "react";
import tanyaImg from "./assets/image-tanya.jpg";
import johnImg from "./assets/image-john.jpg";

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
  return <></>;
}

export default App;
