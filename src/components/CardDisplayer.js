import { useRef, useState } from "react"
import { FaCircleChevronLeft,FaCircleChevronRight,FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function CardDisplayer({children}){
    const elementRef = useRef(null);
    const [arrowDisable, setArrowDisable] = useState(true);

    const handleHorizantalScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
          element.scrollLeft += step;
          scrollAmount += Math.abs(step);
          if (scrollAmount >= distance) {
            clearInterval(slideTimer);
          }
          if (element.scrollLeft === 0) {
            setArrowDisable(true);
          } else {
            setArrowDisable(false);
          }
        }, speed);
      };


    return (    <>    
            <div className="cardDisplayer" ref={elementRef}>
                {children}
                <button className="botonesScrollLeft" onClick={() => {handleHorizantalScroll(elementRef.current, 25, 100, -10);}}><FaChevronLeft/></button>
                <button className="botonesScrollRigth" onClick={() => {handleHorizantalScroll(elementRef.current, 25, 100, 10);}}><FaChevronRight/></button>
            </div>
            <div>
            </div>
            </>
    )
}