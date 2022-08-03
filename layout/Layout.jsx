import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import MobileNavigation from "../components/MobileNav";

const Layout = (props) => {
  const [mobileNavOpened, setMobileNavOpened] = useState(false);
  const { children } = props;
  return (
    <main>
      <Header
        setMobileNavOpened={setMobileNavOpened}
        mobileNavOpened={mobileNavOpened}
      />
      <MobileNavigation
        setMobileNavOpened={setMobileNavOpened}
        mobileNavOpened={mobileNavOpened}
      />
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
        <Footer />
      </AnimatePresence>
    </main>
  );
};

export default Layout;
