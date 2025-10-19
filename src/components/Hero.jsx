import { useEffect } from "react";

const Hero = () => {

    const videoRef = useRef(null);

    useEffect
  return (
    <section id ="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src="/title.png" alt="MacBook Title" />
        </div>

        <video ref={videoRef} src ="/videos/hero.mp4" autoPlay muted playsInline />

        <button>Buy</button>
        <p>From  ₹169999 or ₹13225/mo. for 12 months</p>
    </section>
  )
}

export default Hero
