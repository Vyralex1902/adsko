import { motion } from "framer-motion";
interface backdropProps {
  children: any;
  onClick: () => void;
}
const backdrop = ({ children, onClick }: backdropProps) => {
  return (
    <motion.div className="absolute top-0 left-0 bg-[#000000e1]" style={{ height: "100%", width: "100%" }}
      onClick={onClick} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children.length}
    </motion.div>
  );
};

export default backdrop;