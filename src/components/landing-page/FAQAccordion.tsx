// components/FAQAccordion.tsx

'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQAccordion: React.FC<{ faqs: FAQItemProps[] }> = ({ faqs }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-10 mx-5">
      <div className="md:w-1/3">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white text-left">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="md:w-2/3">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AccordionTrigger className="flex justify-between items-center p-">
                  <span className="text-lg font-semibold text-black dark:text-white">{faq.question}</span>
                  
                </AccordionTrigger>
              </motion.div>
              <AccordionContent className="">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-700 dark:text-gray-400"
                >
                  {faq.answer}
                </motion.p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQAccordion;
