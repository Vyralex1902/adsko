import { motion } from "framer-motion"
import React,{useEffect,useRef} from "react";

interface Props{
  children:JSX.Element;
  width?:"fit-content" | "100%";
}

export const Reveal = ({children, width = "fit-content"}: Props)=>{
  return (
    <div className="relative" style={{width, overflow:"hidden"}}>
      <motion.div
      variants={{
        visible: { opacity: 1, y:0 },
        hidden: { opacity: 0, y:75 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25}}
      style={{ width: width }}
    >
      {children}
    </motion.div>
    </div>
  )
}