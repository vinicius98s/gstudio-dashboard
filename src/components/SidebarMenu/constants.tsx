import React from "react";

import User from "../../assets/icons/User.svg";
import Pulse from "../../assets/icons/Pulse.svg";
import Cloud from "../../assets/icons/Cloud.svg";
import Picture from "../../assets/icons/Picture.svg";
import Calendar from "../../assets/icons/Calendar.svg";
import Fire from "../../assets/icons/Fire.svg";
import Graph from "../../assets/icons/Graph.svg";
import Settings from "../../assets/icons/Settings.svg";

export const items = [
  {
    id: "user",
    icon: <img src={User} alt="" />,
    isActive: true,
  },
  {
    id: "cloud",
    icon: <img src={Cloud} alt="" />,
    isActive: false,
  },
  {
    id: "pulse",
    icon: <img src={Pulse} alt="" />,
    isActive: false,
  },
  {
    id: "picture",
    icon: <img src={Picture} alt="" />,
    isActive: false,
  },
  {
    id: "calendar",
    icon: <img src={Calendar} alt="" />,
    isActive: false,
  },
  {
    id: "fire",
    icon: <img src={Fire} alt="" />,
    isActive: false,
  },
  {
    id: "graph",
    icon: <img src={Graph} alt="" />,
    isActive: false,
  },
  {
    id: "settings",
    icon: <img src={Settings} alt="" />,
    isActive: false,
  },
];
