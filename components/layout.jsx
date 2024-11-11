import { useEffect } from "react";
import Image from "next/image";
import { motion,AnimatePresence} from "framer-motion";
import Navbar from "./Navbar";
import "@/assets/custom-boot/custom-bootstrap.min.css";
import "@/assets/plugins/fontawesome/css/all.min.css";
import "@/assets/plugins/animate/animate.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useRouter } from "next/router";
export default function Layout({ children }) {
  const currentRoute = useRouter().pathname;

 const delay = currentRoute == '/' ? 2.8 : 0
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    AOS.init({
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      offset: 120,
      delay: 300,
      duration: 700,
      easing: "ease",
      mirror: false,
      once: true,
    });

    if(currentRoute == '/'){
  const e = document.querySelector(".intro")
    setTimeout(() => {
      e.classList.add("animate__hinge")
    }, 2500);

    setTimeout(() => {
      e.classList.add("hide")
    }, 5000)
    }
    
    const images = document.getElementsByTagName("img");
    for (const image of images) {
      image.addEventListener("mousedown", function (t) {
        t.preventDefault();
      });
    }
  }, []);

  return (
    <>
      {currentRoute == "/" ? (
        <div className="animate__animated intro d-flex flex-column align-items-center justify-content-center">
          <div className="col-md-3 col-5">
            <Image
              src="/image/banner.jpg"
              height={500}
              width={500}
              className="img-fluid rounded-3"
              alt="profile image"
            />
          </div>
          <h1 className="text-uppercase border-2 border-white border-end text-white my-2">
            Iftekher Mahmud...
          </h1>
          <div
            className="px-8 mx-5 border-2 border-bottom border-white"
            style={{ width: "50%" }}
          ></div>
          <h4 className="text-uppercase mt-2 text-white">
            Full Stack Developer
          </h4>
        </div>
      ) : <></>
      }
      {/* background web  */}
      {/* <div
        className="background"
        style={{ zIndex: "-10", position: "fixed", top: 0, opacity: "0.5" }}
      >
        <Image
          height={1080}
          width={1920}
          src="/image/background/background_3.png"
          className="img-fluid"
          alt="background"
        />
      </div> */}
      {/* background web  */}

      <AnimatePresence mode="wait">

      </AnimatePresence>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        exit={{ scaleX: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1.5,
          delay: delay,
        }}
      >
        <div>
         {children} 
        </div>
        
      </motion.div>

      {currentRoute == "/" ? <Navbar /> : <></>}
    </>
  );
}
