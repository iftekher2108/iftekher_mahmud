import { useEffect } from "react";
import { motion } from "framer-motion";
import '@/assets/custom-boot/custom-bootstrap.min.css'
import "@/assets/plugins/fontawesome/css/all.min.css";
import "@/assets/plugins/animate/animate.min.css";
import "aos/dist/aos.css";
import AOS from "aos";  
export default function Layout({ children }) {
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
  });
  return (
    <>
      <div className="overflow-hidden">
        <motion.div
          // initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 500, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
