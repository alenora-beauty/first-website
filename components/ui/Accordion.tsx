"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface AccordionItemData {
  id: string;
  header: React.ReactNode;
  content: React.ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function Accordion({
  items,
  allowMultiple = false,
  className = "",
  itemClassName = "",
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(() => {
    const defaultOpenItem = items.find((i) => i.defaultOpen);
    return defaultOpenItem ? [defaultOpenItem.id] : items.length > 0 ? [items[0].id] : [];
  });

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`divide-y divide-hairline ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className={`transition-colors ${itemClassName}`}>
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-btn-${item.id}`}
              className="w-full flex items-center justify-between text-left py-6 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg group"
            >
              <div className="flex-1 pr-4">{item.header}</div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="shrink-0 p-2 rounded-full bg-coffee/5 text-coffee group-hover:bg-coffee/10 transition-colors"
              >
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-btn-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pt-2 px-2">{item.content}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

