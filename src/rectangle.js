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
            duration: 2,
            ease: "easeInOut"
        }
    }
}

  return (

    <div className="Rect">

      <svg className="rectangle_svg" height="100%" width="100%" viewBox = "0 57 200 200" stroke-width="8">

        <motion.path fill = "none" stroke="black" d = "M 28 28 h 130 v 250 h -130 Z" 
         variants = {pathVariants}
         initial = "hidden"
         animate = "visible"
        />

      </svg>
      
  </div>
);
}

export default Rect;