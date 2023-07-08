import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { RiUserLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { SiGooglemessages } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { BiRightArrow } from "react-icons/bi";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import googledoc from "../assets/googledoc.png";
import twitterclone from "../assets/twitterclone.png";
import kanban from "../assets/kanban.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import redux from "../assets/redux.png";
import mui from "../assets/mui.png";
import npm from "../assets/npm.png";
import gymImg from "../assets/gymImg.png";
import boostrap from "../assets/boostrap.png";
const Data = [
  { name: "Home", path: "/", icon: AiOutlineHome },
  { name: "About", path: "about", icon: RiUserLine },
  { name: "Skills", path: "skills", icon: GiSkills },
  { name: "Projects", path: "project", icon: AiOutlineProject },
  { name: "Contact", path: "contact", icon: SiGooglemessages },
];
const SkillData = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "Javascript", image: js },
  { name: "React", image: react },
  { name: "Git", image: git },
  { name: "Redux", image: redux },
  { name: "MUI", image: mui },
  { name: "Npm", image: npm },
  { name: "Boostrap", image: boostrap },
];
const projectData = [
  {
    title: "Google Doc",
    img: googledoc,
    github: "https://github.com/ShubhamJadhav21/FunctionUp-projects.git ",
    githubIcon: <BsGithub />,
    previewLink: "https://googledoc-two.vercel.app/",
    preview: <PlayCircleFilledIcon sx={{ fontSize: "2.5rem" }} />,
  },

  {
    title: "Twitter Clone",
    img: twitterclone,
    github: "https://github.com/ShubhamJadhav21/FunctionUp-projects.git",
    githubIcon: <BsGithub />,
    preview: <PlayCircleFilledIcon sx={{ fontSize: "2.5rem" }} />,
    previewLink: "https://twitter-clone-bablukmr.netlify.app/",
  },
  {
    title: "Gym Website",
    img: gymImg,
    github: "https://github.com/ShubhamJadhav21/Gym-website.git ",
    githubIcon: <BsGithub />,
    preview: <PlayCircleFilledIcon sx={{ fontSize: "2.5rem" }} />,
    previewLink: "https://gym-website-lime-sigma.vercel.app/",
  },
  {
    title: "Kanban Board",
    img: kanban,
    github: "https://github.com/devasif786/Kanban-board.git    ",
    githubIcon: <BsGithub />,
    preview: <PlayCircleFilledIcon sx={{ fontSize: "2.5rem" }} />,
    previewLink: "http://kanban-board-lilac.vercel.app",
  },
  {
    title: "Working",
    img: "",
    github: "",
    githubIcon: <BsGithub />,
    preview: <PlayCircleFilledIcon sx={{ fontSize: "2.5rem" }} />,
    previewLink: "",
  },
];

export { SkillData, projectData, Data };
