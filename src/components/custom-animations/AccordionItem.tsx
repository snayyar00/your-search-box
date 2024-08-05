'use client'

import { AnimatePresence, motion } from "framer-motion";
import { MinusCircleIcon, PlusCircleIcon } from "lucide-react";
import { useState } from "react";


interface accordionProps {
    id: number;
    question: string;
    answer: string;
  }

export const AccordionItem = ({ id, question, answer }: accordionProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex  items-center py-7 border-b border-gray-400">
          <h4 className="text-lg font-bold flex-1  -tracking-tight">
            {question}
          </h4>
          <span>
            {isOpen ? (
              <MinusCircleIcon className="h-6 w-6" />
            ) : (
              <PlusCircleIcon className="h-6 w-6" />
            )}
          </span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="leading-relaxed text-white/90 text-lg tracking-wider "
              initial={{
                opacity: 0,
                paddingTop: 0,
                marginTop: 10,
                height: 0,
                paddingBottom: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
                marginTop: 10,
              }}
              exit={{
                opacity: 0,
                paddingTop: 0,
                height: 0,
                paddingBottom: 0,
                marginTop: 5,
              }}
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };