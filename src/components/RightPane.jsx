import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  MessageSquare,
} from "lucide-react";
import FluidTabs from "./animata/card/fluid-tabs";
import AboutMe from "../Pages/AboutMe";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import Education from "../Pages/Education";
import Experience from "../Pages/Experience";

const tabs = [
  {
    id: "about",
    label: "About Me",
    icon: <User />,
    content: <AboutMe />,
  },
  {
    id: "education",
    label: "Education",
    icon: <GraduationCap />,
    content: <Education />,
  },
  {
    id: "experience",
    label: "Experience",
    icon: <Briefcase />,
    content: <Experience />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <FolderGit2 />,
    content: <Projects />,
  },
  {
    id: "contact",
    label: "Contact Me",
    icon: <MessageSquare />,
    content: <Contact />,
  },
];

const RightPane = () => {
  const [activeContent, setActiveContent] = useState(tabs[0].content);

  return (
    <div className="h-full overflow-hidden">
      <FluidTabs tabs={tabs} onTabChange={setActiveContent} />
      <div className="content p-4 h-[90%] overflow-auto">{activeContent}</div>
    </div>
  );
};

export default RightPane;
