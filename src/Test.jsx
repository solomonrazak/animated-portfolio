import React, { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible:{opacaity: 1, x: 300, transition: {duration: 2}},
        hidden: {opacity: 0}
    }

    const items = ["Solomon", "razak", "ntiri", "kwesi"];
  return (
    <div className="course">
      <motion.div
      variants={variants}
       transition={{duration: 2}}
       animate={open ? "visible" : "hidden"}

        className="box"
      ></motion.div>
      <button onClick={() => setOpen(prev => !prev)}>Click</button>
      <motion.ul initial="hidden" animate="visible" variants={variants}>
       {items.map((item) => (
        <motion.li key={item}>{item}</motion.li>
       ))}
      </motion.ul>
    </div>
  );
};

export default Test;
