import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/victorgribel' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/victor-gribel-7b3866232/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/v_gribel/' },
];

export const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link href={item.path} key={index} className={iconStyles}>
                    {item.icon}
                </Link>
            ))}
        </div>
    );
};
