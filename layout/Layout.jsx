import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

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
          {/* <motion.div
            initial={{ opacity: 1.5 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.9 }}
            exit={{ opacity: 0 }}
            className="w-screen h-screen pointer-events-none bg-white fixed flex items-center justify-center top-0 left-0 z-40"
          >
            <div className="loadin animate-spin rounded-full border-t-transparent w-16 h-16 border-2 border-slate-500"></div>
          </motion.div> */}
          {children}
        </motion.div>
        <Footer />
      </AnimatePresence>
    </main>
  );
};

export default Layout;
