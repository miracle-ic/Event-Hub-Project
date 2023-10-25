import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, delay: 1.5,  } },
};

const RevealAppear = ({ children }) => {

  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
        <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
        >
            { children }
        </motion.div>
    </div>
  );
};

export default RevealAppear;
