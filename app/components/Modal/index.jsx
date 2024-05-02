import { motion } from "framer-motion";
import backdrop from "../Backdrop/index";


const dropIn = {
  hidden:{
    y:"-100vh",
    opacity:0,
  },
  visible:{
    y:"0",
    opacity:1,
    transition:{
      duration:0.1,
      type: "spring",
      damping:100,
      stiffness:500,
    }
  },
  exit:{
    y:"100vh",
    opacity:0,
  },
}

const modal = ({ handleClose, text }) => {
  return (
    <backdrop onClick={handleClose}>
      <motion.div className="" style={{ height: "min(50%, 300px)", width: "clamp(50%, 700px, 90%" }}
        onClick={(e) => e.stopPropagation()} variants={dropIn} initial="hidden" animate="visible" exit="exit">
        <p>{text}</p>
        <button onClick={handleClose}></button>
      </motion.div>
    </backdrop>
  );
};

export default modal;