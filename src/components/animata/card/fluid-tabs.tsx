"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

// Define the Tab interface
interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// Define the FluidTabsProps interface
interface FluidTabsProps {
  tabs: Tab[];
  onTabChange?: (content: React.ReactNode) => void;
}

const FluidTabs: React.FC<FluidTabsProps> = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [prevActiveTab, setPrevActiveTab] = useState(tabs[0].id);
  const [touchedTab, setTouchedTab] = useState<string | null>(null);

  useEffect(() => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    if (onTabChange && activeTabContent) {
      onTabChange(activeTabContent);
    }
  }, [activeTab, onTabChange, tabs]);

  const handleTabClick = (tabId: string) => {
    setPrevActiveTab(activeTab);
    setActiveTab(tabId);
  };

  const getTabIndex = (tabId: string) =>
    tabs.findIndex((tab) => tab.id === tabId);

  return (
    <div>
      <div className="flex items-center justify-center py-2">
        <div className="relative w-full mx-35 flex space-x-4 overflow-hidden rounded-full bg-[#f5f1eb] p-1 shadow-lg">
          <AnimatePresence initial={false}>
            <motion.div
              key={activeTab}
              className="absolute inset-y-0 my-1 rounded-full bg-white"
              initial={{ x: `${getTabIndex(prevActiveTab) * 100}%` }}
              animate={{ x: `${getTabIndex(activeTab) * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${100 / tabs.length}%` }}
            />
          </AnimatePresence>
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`relative z-10 flex w-full items-center justify-center gap-1.5 px-5 py-3 text-sm font-bold transition-colors duration-300 ${
                activeTab === tab.id ? "font-bold text-black" : "text-gray-500"
              } ${touchedTab === tab.id ? "blur-sm" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FluidTabs;
