import './App.css';
import { motion } from "framer-motion"

function Rect() {

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },

    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            delay: 1.2,
            duration: 3.5,
            ease: "easeInOut",
            repeat: 1,
            repeatType: "reverse",
        }
    }
}

const pathVariantsTwo = {
  hidden: {
      opacity: 0,
      pathLength: 0,
  },

  visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
          delay: 1.2,
          duration: 3.5,
          ease: "easeInOut",
          repeat: 1,
          repeatType: "reverse",
      },
  
  }
}

  return (

    <div className="Rect">

      <svg className="rectangle_svg" height="100%" width="100%" viewBox = "0 57 200 200" stroke-width="8" stroke-linecap="round">

        <motion.path fill = "none" stroke="rgb(252, 225, 255)" d = "M 28 28 h 143 a10,10 0 0 1 10,10 L 158 273 a10,10 0 0 1 -10,10 L 37 283 a10,10 0 0 1 -10,-10 L 7 100" 
         shape-rendering="crispEdges"
         variants = {pathVariants}
         initial = "hidden"
         animate = "visible"
        />

        <motion.path fill = "none" stroke="rgb(252, 225, 255)" d = "M 160 -16 L 150 28" 
         variants = {pathVariantsTwo}
         shape-rendering="crispEdges"
         initial = "hidden"
         animate = "visible"
         transition={{ duration: 2, repeat: 1 }}
        />

      </svg>
      
  </div>
);
}

export default Rect;