import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/hung1503",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/hung-nguyen-b9a1891a7/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/duyhung.3051/",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
