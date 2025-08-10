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

const FaqCard = ({ setCurrentFaq, ...props }: TFaqCardProps) => {
  const isOpen = props.currentFaq == props._id;
  return (
    <div className="bg-accent">
      <div
        onClick={() => setCurrentFaq(props._id)}
        className="p-4 px-5 font-bold text-lg flex items-center justify-between cursor-pointer gap-4"
      >
        <h3>{props.question}</h3>

        <div>
          {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </div>
      </div>

      <AnimatePresence initial={false}>
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="text-lg overflow-hidden"
        >
          {isOpen && (
            <div className="p-5 pt-0">
              <p className="text-base">{props.answer}</p>

              <span className="block mt-5 text-sm text-black/50">
                Created at: {props._created_at}
              </span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FaqCard;
