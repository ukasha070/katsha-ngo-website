"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

type TFaqCardProps = {
  _id: number;
  question: string;
  answer: string;
  _created_at: string;
  setCurrentFaq: React.Dispatch<React.SetStateAction<number | null>>;
  currentFaq: number | null;
};

const variants = {
  hidden: { height: 0, opacity: 0, y: -10 },
  visible: { height: "auto", opacity: 1, y: 0 },
  exit: { height: 0, opacity: 0, y: -10 },
};

const FaqCard = ({ setCurrentFaq, ...props }: TFaqCardProps) => {
  const isOpen = props.currentFaq === props._id;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-accent border border-accent overflow-hidden duration-300"
    >
      {/* Header */}
      <div
        onClick={() => setCurrentFaq(isOpen ? null : props._id)}
        className="p-4 px-5 font-semibold text-lg flex items-center justify-between cursor-pointer gap-4 select-none"
      >
        <h3 className="text-foreground">{props.question}</h3>

        {/* Animated Icon */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <Minus className="size-5 stroke-foreground" />
          ) : (
            <Plus className="size-5 stroke-foreground" />
          )}
        </motion.div>
      </div>

      {/* Expandable Content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="text-xl overflow-hidden"
          >
            <div className="p-5 pt-0">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground"
              >
                {props.answer}
              </motion.p>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.2 }}
                className="block mt-4 text-sm"
              >
                Created at: {props._created_at}
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqCard;
