import profilePhoto from "../assets/profile-photo.png";
import {
  MailOpen,
  PhoneCall,
  MapPinHouse,
  Instagram,
  Github,
  Linkedin,
  Twitter,
  Link,
} from "lucide-react";
import AnimatedDock from "./animata/container/animated-dock";

const LeftPane = () => {
  const quickContacts = [
    {
      name: "mail",
      icon: <MailOpen />,
      text: "shaikabdulkhadar1.shaik@gmail.com",
    },
    {
      name: "phone",
      icon: <PhoneCall />,
      text: "+1 571-561-4356",
    },
    {
      name: "location",
      icon: <MapPinHouse />,
      text: "Virginia, USA",
    },
  ];

  return (
    <div className="h-[100%] w-[100%] rounded-tl-2xl rounded-2xl shadow-2xl border-1 border-black flex flex-col items-center p-10">
      <div className="relative group animate-float">
        <div className="absolute -inset-0.5 bg-black rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 group-hover:scale-105"></div>
        <img
          src={profilePhoto}
          alt="Profile"
          className="h-70 w-70 rounded-full object-cover relative hover:scale-105 transition duration-200"
        />
      </div>
      <div className="text-center mt-10">
        <h1 className="font-league font-bold text-4xl opacity-85">
          Shaik Abdul Khadar
        </h1>
        <p className="font-league font-bold text-xl opacity-70">
          Web developer
        </p>
      </div>
      <div className="quick-contacts mt-16">
        {quickContacts.map((contact, index) => (
          <div key={index} className="flex flex-row mt-2 font-bold">
            {contact.icon}
            <p className="ml-2 font-medium font-league text-lg">
              {contact.text}
            </p>
          </div>
        ))}
      </div>
      <div className="socials w-[90%] relative items-center justify-center mt-35">
        <AnimatedDock
          items={[
            {
              href: "",
              icon: <Instagram />,
              title: "Instagram",
            },
            {
              href: "",
              icon: <Twitter />,
              title: "Twitter",
            },
            {
              href: "",
              icon: <Github />,
              title: "Github",
            },
            {
              href: "",
              icon: <Linkedin />,
              title: "Linkedin",
            },
            {
              href: "",
              icon: <Link />,
              title: "LinkTree",
            },
          ]}
          largeClassName="max-w-lg"
          smallClassName="w-full"
        />
      </div>
    </div>
  );
};

export default LeftPane;
