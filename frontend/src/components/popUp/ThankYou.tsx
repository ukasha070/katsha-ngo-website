"use client";

import { motion, AnimatePresence } from "framer-motion";

interface ThankYouProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose?: () => void;
}

export default function ThankYouPop({
  title,
  description,
  isOpen,
  onClose,
}: ThankYouProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <div className="overlay-container"></div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-white rounded-2xl shadow-xl p-8 max-w-[90%] md:max-w-md flex flex-col gap-2 justify-center text-center z-50"
          >
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">{title}</h2>
            <iframe src="https://lottie.host/embed/8199e971-681b-4dc6-8b03-9b418dd1ea18/gfyj9R1i3P.lottie"></iframe>
            <p className="mb-6 text-black/60 max-w-[80%] mx-auto">
              {description}
            </p>
            <button
              onClick={onClose}
              className="bg-yellow-500 text-white px-6 py-2 rounded-full w-fit mx-auto font-semibold hover:bg-yellow-600 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
