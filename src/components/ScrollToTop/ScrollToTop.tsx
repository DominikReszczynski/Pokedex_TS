import { useEffect, useState } from "react";
import scrollToTopIcon from "../../assets/scrollToTopIcon.png";
import "./ScrollToTop.scss";

export const ScrollToTop = () => {
  const [isPaeScrollDown, setIsPageScrollDown] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) setIsPageScrollDown(true)
      else setIsPageScrollDown(false)
    })
  }, [])

  const handleScroll = () => {
window.scrollTo({
  top: 0,
  behavior: 'smooth'
})
  }

  return (
    <>
      {isPaeScrollDown ? (
        <div className="scroll_to_top_icon">
          <img src={scrollToTopIcon} alt="scroll to top icon" onClick={handleScroll}/>
        </div>
      ) : null}
    </>
  );
};
