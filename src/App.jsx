import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense, useEffect, useState, useRef } from "react";

/* GSAP */
import gsap from "gsap";

/* STYLE */
import "./App.scss";

/* COMPONENTS */
import NavBar from "./components/NavBar";
import Services from "./components/Services";

function App() {
  const [is_loading, setLoading] = useState(true);

  const backdrop_ref = useRef(null);

  useEffect(() => {
    gsap.set(".cursor_dot", { force3D: true });
    window.addEventListener("mousemove", (event) => {
      const { clientX, clientY, target } = event;

      if(target instanceof HTMLElement){
        const data = ["char", "line", "word"];
        const client_data = (target.className === "char") ? 50 : 25;

        gsap.to(".cursor_dot", {
          x: clientX - client_data,
          y: clientY - client_data,
          opacity: 1,
          duration: .25,
          ease: "none",
        });

        gsap.to(".cursor_dot_center", {
          x: clientX - 2.5,
          y: clientY - 2.5,
          duration: .1,
          ease: "none",
        });
      }
    });

    document.body.querySelector("h1")?.addEventListener("mouseenter", (event) => {
      const { clientX, clientY } = event;

      gsap.to(".cursor_dot", {
        x: clientX - 50,
        y: clientY - 50,
        width: 100,
        height: 100,
        duration: .25,
        ease: "none",
        background: "#26FACA",
      });

      gsap.to(".cursor_dot_center", {
        opacity: 0
      });
    });

    document.body.querySelector("h1")?.addEventListener("mouseleave", (event) => {
      const { clientX, clientY } = event;

      gsap.to(".cursor_dot", {
        x: clientX - 25,
        y: clientY - 25,
        width: 50,
        height: 50,
        duration: .25,
        ease: "none",
        background: "transparent"
      });

      gsap.to(".cursor_dot_center", {
        opacity: .25
      });
    });
    
    const backdrop = backdrop_ref.current;
    
    setTimeout(() => {
      gsap.to(backdrop, {duration: 3, opacity: 0, ease: "circ.inOut",});
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div id="body_wrapper">
      <div className="cursor_dot"></div>
      <div className="cursor_dot_center"></div>
      <NavBar />
      <section id="canvas_wrapper">
        <Canvas shadows camera={{ position: [0, 0, 9], fov: 42 }}>
          <color attach="background" args={["#1A1F26"]} />
          <fog attach="fog" args={["#1A1F26", 10, 25]} />
          <Suspense>
            <Experience />
          </Suspense>
          <EffectComposer>
            <Bloom mipmapBlur intensity={1.2} />
          </EffectComposer>
        </Canvas>
      </section>

      { (!is_loading) &&
        <>
          <Services />
        </>
      }
      <div id="backdrop" ref={ backdrop_ref }></div>
    </div>
  );
}

export default App;