import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedButton = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement("a");
    link.href = "/Resume.pdf"; // Resume file
    link.download = "Jyotirmay_Padhiary_Resume.pdf";
    link.click();
    setIsDownloading(false);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      className="bg-purple-700 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleDownload}
    >
      {isDownloading ? (
        <span>
          Downloading...{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <i className="fas fa-spinner fa-spin" />
          </motion.span>
        </span>
      ) : (
        "Download Resume"
      )}
    </motion.button>
  );
};

export default AnimatedButton;
