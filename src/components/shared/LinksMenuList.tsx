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

export const LinksMenuList: Array<DropDownItems> = [
  {
    id: "p_1",
    icon: (
      <img
        src={github}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "GitHub",
    bgColor: "#1A1A1A",
  },
  {
    id: "p_2",
    icon: <img src={fem} />,
    item: "Frontend Mentor",
    bgColor: "#FFF",
    arrowColor: "#737373",
    border: "#D9D9D9",
  },
  {
    id: "p_3",
    icon: (
      <img
        src={twitter}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Twitter",
    bgColor: "#43B7E9",
  },
  {
    id: "p_4",
    icon: (
      <img
        src={linkedin}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Linkedin",
    bgColor: "#2D68FF",
  },
  {
    id: "p_5",
    icon: (
      <img
        src={youtube}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Youtube",
    bgColor: "#EE3939",
  },
  {
    id: "p_6",
    icon: (
      <img
        src={facebook}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Facebook",
    bgColor: "#2442AC",
  },
  {
    id: "p_7",
    icon: (
      <img
        src={twitch}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Twitch",
    bgColor: "#EE3FC8",
  },
  {
    id: "p_8",
    icon: <img src={devto} />,
    item: "Dev.to",
    bgColor: "#333333",
  },
  {
    id: "p_9",
    icon: (
      <img
        src={codewars}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Codewars",
    bgColor: "#8A1A50",
  },
  {
    id: "p_10",
    icon: (
      <img
        src={fcc}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "freeCodeCamp",
    bgColor: "#302267",
  },
  {
    id: "p_11",
    icon: (
      <img
        src={gitlab}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Gitlab",
    bgColor: "#EB4925",
  },
  {
    id: "p_12",
    icon: (
      <img
        src={hashnode}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Hashnode",
    bgColor: "#0330D1",
  },
  {
    id: "p_13",
    icon: (
      <img
        src={sof}
        style={{
          filter:
            "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(100%) hue-rotate(0deg) brightness(100%) contrast(100%)",
        }}
      />
    ),
    item: "Stack Overflow",
    bgColor: "#EC7100",
  },
];

// Without Colors

export const LinksMenuListGrey: Array<DropDownItems> = [
  {
    id: "p_1",
    icon: <img src={github} />,
    item: "GitHub",
    bgColor: "#1A1A1A",
  },
  {
    id: "p_2",
    icon: <img src={fem} />,
    item: "Frontend Mentor",
    bgColor: "#FFF",
    arrowColor: "#737373",
    border: "#D9D9D9",
  },
  {
    id: "p_3",
    icon: <img src={twitter} />,
    item: "Twitter",
    bgColor: "#43B7E9",
  },
  {
    id: "p_4",
    icon: <img src={linkedin} />,
    item: "Linkedin",
    bgColor: "#2D68FF",
  },
  {
    id: "p_5",
    icon: <img src={youtube} />,
    item: "Youtube",
    bgColor: "#EE3939",
  },
  {
    id: "p_6",
    icon: <img src={facebook} />,
    item: "Facebook",
    bgColor: "#2442AC",
  },
  {
    id: "p_7",
    icon: <img src={twitch} />,
    item: "Twitch",
    bgColor: "#EE3FC8",
  },
  {
    id: "p_8",
    icon: <img src={devto} />,
    item: "Dev.to",
    bgColor: "#333333",
  },
  {
    id: "p_9",
    icon: <img src={codewars} />,
    item: "Codewars",
    bgColor: "#8A1A50",
  },
  {
    id: "p_10",
    icon: <img src={fcc} />,
    item: "freeCodeCamp",
    bgColor: "#302267",
  },
  {
    id: "p_11",
    icon: <img src={gitlab} />,
    item: "Gitlab",
    bgColor: "#EB4925",
  },
  {
    id: "p_12",
    icon: <img src={hashnode} />,
    item: "Hashnode",
    bgColor: "#0330D1",
  },
  {
    id: "p_13",
    icon: <img src={sof} />,
    item: "Stack Overflow",
    bgColor: "#EC7100",
  },
];

export default LinksMenuList;
