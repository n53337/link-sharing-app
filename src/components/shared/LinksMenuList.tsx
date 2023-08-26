import github from "@/assets/vectors/github.svg";
import fem from "@/assets/vectors/fem.svg";
import twitter from "@/assets/vectors/twitter.svg";
import linkedin from "@/assets/vectors/linkedin.svg";
import youtube from "@/assets/vectors/youtube.svg";
import facebook from "@/assets/vectors/facebook.svg";
import twitch from "@/assets/vectors/twitch.svg";
import devto from "@/assets/vectors/devto.svg";
import codewars from "@/assets/vectors/codewars.svg";
import fcc from "@/assets/vectors/fcc.svg";
import gitlab from "@/assets/vectors/gitlab.svg";
import hashnode from "@/assets/vectors/hashnode.svg";
import sof from "@/assets/vectors/sof.svg";

import { DropDownItems } from "@/ui/DropDown";

const LinksMenuList: Array<DropDownItems> = [
  {
    id: 1,
    icon: <img src={github} />,
    item: "GitHub",
  },
  {
    id: 2,
    icon: <img src={fem} />,
    item: "Frontend Mentor",
  },
  {
    id: 3,
    icon: <img src={twitter} />,
    item: "Twitter",
  },
  {
    id: 4,
    icon: <img src={linkedin} />,
    item: "Linkedin",
  },
  {
    id: 5,
    icon: <img src={youtube} />,
    item: "Youtube",
  },
  {
    id: 6,
    icon: <img src={facebook} />,
    item: "Facebook",
  },
  {
    id: 7,
    icon: <img src={twitch} />,
    item: "Twitch",
  },
  {
    id: 8,
    icon: <img src={devto} />,
    item: "Dev.to",
  },
  {
    id: 9,
    icon: <img src={codewars} />,
    item: "Codewars",
  },
  {
    id: 10,
    icon: <img src={fcc} />,
    item: "freeCodeCamp",
  },
  {
    id: 11,
    icon: <img src={gitlab} />,
    item: "Gitlab",
  },
  {
    id: 12,
    icon: <img src={hashnode} />,
    item: "Hashnode",
  },
  {
    id: 12,
    icon: <img src={sof} />,
    item: "Stack Overflow",
  },
];

export default LinksMenuList;
