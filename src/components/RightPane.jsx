import { useState } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  MessageSquare,
} from "lucide-react";
import AboutMe from "../Pages/AboutMe";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

const tabs = [
  { id: "about", label: "About Me", icon: User },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: FolderGit2 },
  { id: "contact", label: "Contact Me", icon: MessageSquare },
];

const RightPane = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutMe />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="w-[100%] h-[100%] rounded-tr-2xl rounded-br-2xl border-2 border-black ">
      <div className="navBar mt-4">
        <nav className="flex justify-center space-x-4 ">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative px-4 py-2 rounded-lg transition-colors",
                  activeTab === tab.id
                    ? "text-black"
                    : "text-black/60 hover:text-black/80"
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      border: "2px solid rgba(255, 255, 255, 0.2)",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                      transform: "translateZ(0)",
                    }}
                    transition={{
                      type: "spring",
                      duration: 0.5,
                      stiffness: 200,
                      damping: 20,
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      boxShadow: "0 0 15px rgba(0,0,0,0.2)",
                    }}
                  />
                )}
                <span className="relative flex flex-row z-10 transition-transform duration-200 hover:scale-105">
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </span>{" "}
              </button>
            );
          })}
        </nav>
      </div>
      <div className="content flex-1 p-8 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default RightPane;
