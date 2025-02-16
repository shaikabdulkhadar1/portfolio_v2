import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Student Assistant (Micro-job)",
      company: "The Catholic University of America",
      location: "Washington DC, USA",
      period: "Nov 23 - Dec 24",
      description: [
        "Developed and optimized the Public Goods Game for the Dept. of Public Policy, leveraging behavioral economics research to enhance engagement and educational outcomes.",
        "Conducted a Public Goods Game experiment with 20+ students, validating its effectiveness, and strategized deployment for a 50+ student cohort in Ghana, scaling its impact internationally.",
        "Co-curated the syllabus for Blockchain, Cryptoeconomics, and Public Policy, integrating innovative blockchain applications for public policy analysis.",
      ],
    },
    {
      title: "Operations Assistant",
      company: "Events and Conference Services @ CUA",
      location: "Washington DC, USA",
      period: "Sep 23 - Oct 24",
      description: [
        "Delivered logistical and administrative support for diverse on-campus events, ensuring seamless execution and attendee satisfaction for over 20 conferences, workshops, and seminars annually.",
        "Utilized When2Work for scheduling, 25Live for event management, and Trello for communication and task tracking, ensuring seamless planning and execution of events.",
        "Coordinated event setup and teardown, including arranging furniture, audio-visual equipment, and signage as per event requirements.",
      ],
    },
    {
      title: "Treasurer / Public Relations Director",
      company: "Indian Students Association @ CUA",
      location: "Washington DC, USA",
      period: "Sep 23 - Present",
      description: [
        "Oversee ISA's website and social media, driving engaging content that attracted new members, resulting in a 20% increase in followers and heightened visibility for ISA's initiatives.",
        "Represent ISA at 5+ Associations' meetings, fostering partnerships with student organizations, enhancing collaboration, and expanding ISA's reach within the community.",
        "Managed the allocated budget, supporting 10+ cultural events and community initiatives, ensuring financial sustainability and resource accessibility for 100+ members.",
        "Collaborated with executive board members to strategize and secure funding through sponsorships and donations, increasing event budgets and engagement opportunities.",
      ],
    },
    {
      title: "I.T Consultant",
      company: "KC Overseas Education Pvt Ltd Dilsukhnagar",
      location: "Hyderabad, TS, India",
      period: "Oct 21 - June 23",
      description: [
        "Optimized company's database performance by implementing indexing and query optimization techniques, resulting in a 40% increase in database processing speed and reducing server response time by 25%.",
        "Implemented efficient IT services encompassing the development, deployment, and upkeep of the company's CRM platform, resulting in a 25% reduction in response time and a 30% increase in customer satisfaction.",
        "Organized the successful development and implementation of a Web Application that drove a 25% increase in revenue and reduced manual processes, saving the company 20+ hours per week.",
      ],
    },
    {
      title: "Intern Campus Ambassador",
      company: "I.I.T Bombay ",
      location: "Hyderabad, TS, India",
      period: "July 20 - July 21",
      description: [
        "Organized the successful development and implementation of a Web Application that drove a 25% increase in revenue and reduced manual processes, saving the company 20+ hours per week.",
        "Led a team of students in organizing 6 seminars on emerging technologies and cybersecurity at my college campus, effectively managing the logistics, promoting the events, and engaging with speakers and attendees.",
      ],
    },
    {
      title: "Intern Business Development Associate",
      company: "HouseItt & WeSettle",
      location: "Hyderabad, TS, India",
      period: "Oct 20 - Nov 20",
      description: [
        "Aided over 100 students in securing PGs and rental rooms during the Pandemic.",
        "Generated 100+ leads for new business opportunities through social media engagement, strategic networking with industry professionals, and active participation in trade shows.",
        "Drove a 20% increase in website traffic and a 30% boost in social media engagement by spearheading SEO and PPC campaigns and crafting compelling, shareable content.",
      ],
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
      {experiences.map((edu, index) => (
        <div
          key={index}
          className="p-6 m-3 rounded-xl transform hover:scale-[1.02] transition-all border-2 border-black"
        >
          <h3 className="text-2xl font-bold font-league opacity-85">
            {edu.title}
          </h3>
          <h4 className="text-lg font-league font-semibold opacity-85 mt-2">
            {edu.company}
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
          <div className="">
            <h5 className="font-league font-bold opacity-80 mt-3">
              Description:
            </h5>
            {edu.description.map((p, index) => (
              <p
                key={index}
                className="flex items-center font-league opacity-85"
              >
                {" "}
                <ChevronRight size={14} />
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Experience;
