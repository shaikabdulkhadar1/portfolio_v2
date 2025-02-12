import profilePhoto from "../assets/profile-photo.png";
import {
  MailOpen,
  PhoneCall,
  MapPinHouse,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

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

const socialContacts = [
  {
    name: "insta",
    icon: <Instagram />,
    link: "",
  },
  {
    name: "twitter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 30 30"
      >
        <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
      </svg>
    ),
    link: "",
  },
  {
    name: "github",
    icon: <Github />,
    link: "",
  },
  {
    name: "linkedin",
    icon: <Linkedin />,
    link: "",
  },
];

const LeftPane = () => {
  return (
    <div className="h-[100%] w-[100%] rounded-tl-2xl rounded-bl-2xl border-2 border-black flex flex-col items-center p-10">
      <div className="profile-photo m-4">
        <img src={profilePhoto} />
      </div>
      <div className="text-center mt-4">
        <h1>Shaik Abdul Khadar</h1>
        <p>Web developer</p>
      </div>
      <div className="quick-contacts mt-4">
        {quickContacts.map((contact, index) => (
          <div key={index} className="flex flex-row mt-2">
            {contact.icon}
            <p className="ml-2">{contact.text}</p>
          </div>
        ))}
      </div>
      <div className="socials w-[90%] flex flex-row justify-between mt-54">
        {socialContacts.map((social, index) => (
          <div key={index}>{social.icon}</div>
        ))}
      </div>
    </div>
  );
};

export default LeftPane;
