import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type IconlyIconProps = {
    size?: number;
    color?: string;
}

export const IconlyHome = ({ size = 24, color = "#000000" }: IconlyIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.07874 16.1354H14.8937" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M2.40002 13.713C2.40002 8.082 3.01402 8.475 6.31902 5.41C7.76502 4.246 10.015 2 11.958 2C13.9 2 16.195 4.235 17.654 5.41C20.959 8.475 21.572 8.082 21.572 13.713C21.572 22 19.613 22 11.986 22C4.35903 22 2.40002 22 2.40002 13.713Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    )
}

export const IconlySun = ({ size = 24, color = "#000000" }: IconlyIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="1.5" />
            <path d="M12 2V4M12 20V22M4 12H2M22 12H20M5 5L6.5 6.5M18.5 18.5L17 17M5 19L6.5 17.5M18.5 5.5L17 7"
                stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};

export const IconlyMoon = ({ size = 24, color = "#000000" }: IconlyIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export const IconlyMenu = ({ size = 24, color = "#000000" }: IconlyIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};

export const IconlyClose = ({ size = 24, color = "#000000" }: IconlyIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18M6 18L18 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    );
};

export const IconlyGithub = ({ size = 24, color = "#000000" }: IconlyIconProps) => (
    <FaGithub size={size} color={color} />
);

export const IconlyLinkedin = ({ size = 24, color = "#000000" }: IconlyIconProps) => (
    <FaLinkedin size={size} color={color} />
);

export const IconlyTwitter = ({ size = 24, color = "#000000" }: IconlyIconProps) => (
    <FaXTwitter size={size} color={color} />
);

export const IconlyEmail = ({ size = 24, color = "#000000" }: IconlyIconProps) => (
    <MdEmail size={size} color={color} />
)