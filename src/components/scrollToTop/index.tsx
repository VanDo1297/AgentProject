import './index.scss';

import { useEffect } from "react";

import arrowUp from '../../assets/icon/arrow-up.png';

const ScrollToTop = ()=>{
    const handleScrollToTop = ()=>{
       
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    const trackScroll = ()=>{
        let mybutton = document.getElementById("myBtn");
        if(mybutton){
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "flex";
            } else {
                mybutton.style.display = "none";
            }
        }
    }

    useEffect(()=>{
        window.onscroll = function() {trackScroll()};
        return ()=>{
            window.onscroll = null;
        }
    },[])

    return (
        <button onClick={handleScrollToTop} id="myBtn" title="Go to top">
            <img src={arrowUp} alt="" />
        </button>
    )
}

export default ScrollToTop;