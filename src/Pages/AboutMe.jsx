import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const whyWorkWithMeItems = [
    { p: "Proven results" },
    { p: "Tech-savvy problem solver" },
    { p: "Continuous learner" },
    { p: "Creative innovator with hands-on experience" },
    { p: "Team player" },
    { p: "Strong communication skills" },
    { p: "Proficient in a wide range of tools and technologies" },
    { p: "Experienced in both frontend and backend development" },
    { p: "Skilled in Agile methodologies" },
    {
      p: "Passionate about turning complex problems into simple, effective solutions",
    },
    {
      p: "Dedicated to continuous improvement and bringing innovative ideas to life",
    },
  ];

  return (
    <div className="w-full p-6">
      <div className="aboutme">
        <motion.h1
          className="text-2xl font-league font-bold"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.4 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="font-league text-lg opacity-85 mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        >
          I am a Computer Science graduate from the Class of 2021 and currently
          pursuing my Master’s degree at the Catholic University of America,
          with graduation expected in 2025. My coding journey began in 2020
          during the pandemic, where self-learning became my greatest strength.
          I immersed myself in various online programming courses, cultivating a
          passion for technology and problem-solving. With over 2 years of
          professional experience as an IT consultant, I have developed a strong
          foundation in the IT sector. My work has enabled me to hone my
          technical skills and contribute to impactful projects. Currently, I am
          focused on becoming a proficient Web3 developer while expanding my
          expertise in Blockchain and Artificial Intelligence. My aim is to
          leverage these transformative technologies to drive innovation and
          create meaningful solutions.
        </motion.p>
      </div>
      <div className="whatIcando mt-10">
        <motion.h1
          className="text-2xl font-league font-bold"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.6 }}
        >
          What I Can Do
        </motion.h1>
        <motion.p
          className="font-league text-lg opacity-85 mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.7 }}
        >
          With a solid foundation in software development and a passion for
          problem-solving, I bring ideas to life using cutting-edge
          technologies. Whether it's designing seamless user interfaces,
          building robust backend systems, or optimizing database performance, I
          ensure every project is efficient and impactful. From creating
          full-stack applications like a Contact Management System and Netflix
          Clone to implementing advanced features with MERN Stack, I thrive on
          delivering innovative solutions. As I continue to explore emerging
          fields like Blockchain and AI, I aim to craft future-ready solutions
          that not only meet today’s challenges but also anticipate tomorrow’s
          opportunities. Let's build something extraordinary together!
        </motion.p>
      </div>
      <div className="whyworkwithme mt-10">
        <motion.h1
          className="text-2xl font-league font-bold"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.8 }}
        >
          Why Work with Me
        </motion.h1>
        <motion.div
          className="grid grid-cols-2 gap-2 mt-2"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.9 }}
        >
          {whyWorkWithMeItems.map((item, index) => (
            <div key={index} className="flex flex-row items-center">
              <ChevronRight size={16} />
              <p className="font-league">{item.p}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
