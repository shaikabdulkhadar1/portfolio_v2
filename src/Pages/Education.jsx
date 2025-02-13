import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master's (M.S) in Computer Science",
      school: "The Catholic University of America",
      location: "Washington DC, USA",
      period: "2023 - 2025",
    },
    {
      degree: "Bachelor's (B.Tech) in Software Engineering",
      school: "Lords Institute of Engineering and Technology",
      location: "Hyderabad, TS, India",
      period: "2017 - 2021",
    },
    {
      degree: "Intermediate in Maths, Physics, and Chemistry (M.P.C)",
      school: "OSM Junior College",
      location: "Hyderabad, TS, India",
      period: "2015 - 2017",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      school: "Hyderabad Islamic School",
      location: "Hyderabad, TS, India",
      period: "2017",
    },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full p-6"
      initial="hidden"
      animate="visible"
      variants={contentVariants}
      transition={{ duration: 0.3 }}
    >
      {education.map((edu, index) => (
        <div
          key={index}
          className="p-6 m-3 rounded-xl transform hover:scale-[1.02] transition-all border-2 border-black"
        >
          <h3 className="text-2xl font-bold font-league opacity-85">
            {edu.degree}
          </h3>
          <h4 className="text-lg font-league font-semibold opacity-85 mt-2">
            {edu.school}
          </h4>
          <div className="flex items-center space-x-4 mt-2 font-league font-semibold">
            <div className="flex items-center opacity-70">
              <MapPin className="w-4 h-4 mr-1" />
              {edu.location}
            </div>
            <div className="flex items-center opacity-70">
              <Calendar className="w-4 h-4 mr-1" />
              {edu.period}
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Education;
