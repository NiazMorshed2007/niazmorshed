import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const Layout = (props) => {
  const { children } = props;
  return (
    <main>
      <Header />
      <AnimatePresence>
        <motion.div
          key="child"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1.5 }}
          exit={{ opacity: 0 }}
          className="content"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Layout;
