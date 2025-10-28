import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => { 
      const el = document.getElementById('Scrollref')
      if(el){
        el.scrollTo(0, 0);
      }
    }, 10);
  }, [pathname]);

  return null;
}
export function useScrollToElement() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollToElement = useCallback((ref, url) => {

    const scroll = () => {
      if (ref?.current) {
        const yOffset = -80;
        const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        const el = document.getElementById('Scrollref')
        if(el){el.scrollTo({ top: y, behavior: 'smooth' });}
      }
    };

    if (pathname === url) {
      scroll();
    } else {
      navigate(url);
      // Attendre que la navigation soit terminée et le DOM monté
      setTimeout(scroll, 100);
    }
  }, [pathname, navigate]);

  return scrollToElement;
}
