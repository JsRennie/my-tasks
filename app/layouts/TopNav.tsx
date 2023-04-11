"use client";

import React from "react";
import Link from "next/link";
import {
  CiGrid41,
  CiSearch,
  CiViewTimeline,
  CiSliderHorizontal,
  CiSliderVertical,
} from "react-icons/ci";
import { AiOutlineTeam } from "react-icons/ai";
import { Avatar, Chip } from "@mui/material";

const nav = [
  {
    label: "List",
    href: "#",
  },
  {
    label: "Board",
    href: "#",
  },
  {
    label: "Timeline",
    href: "#",
  },
  {
    label: "Calender",
    href: "#",
  },
];

const TopNav = () => {
  return (
    <nav className="w-5/6 h-fit">
      <div className="border-b border-black py-2">
        <div className="px-6 flex justify-between">
          <div className="flex">
            <CiGrid41 size={30} color="black" />
            <p className="text-2xl font-semibold pl-2">Planner</p>
          </div>
          <div className="flex">
            <div className="flex mr-36">
              <Avatar
                alt="P"
                src="profile.jpg"
                sx={{ width: 30, height: 30 }}
                className="bg-no-repeat bg-center bg-cover"
              />
              <Avatar
                alt="P"
                src="profile.jpg"
                sx={{ width: 30, height: 30 }}
                className="bg-no-repeat bg-center bg-cover"
              />
              <Avatar
                alt="P"
                src="profile.jpg"
                sx={{ width: 30, height: 30 }}
                className="bg-no-repeat bg-center bg-cover"
              />
              <Chip
                avatar={<AiOutlineTeam />}
                label="Invite"
                variant="outlined"
                className="ml-2"
              />
            </div>

            <Chip
              avatar={<CiSearch />}
              label="Search"
              variant="outlined"
              className="bg-slate-200 mr-20 w-28"
            />
            <Avatar
              alt="P"
              src="profile.jpg"
              sx={{ width: 30, height: 30 }}
              className="bg-no-repeat bg-center bg-cover"
            />
          </div>
        </div>
        <div className="mt-2 ml-4 pl-4">
          {nav.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="px-4 font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="px-6 flex border-b border-black border-opacity-50 py-2 justify-between">
        <div className="flex justify-start items-center">
          <p className="text-xs text-blue-600 font-bold">3</p>
          <span className="pl-2 text-xs opacity-80 font-medium">
            Tasks Completed Today
          </span>
        </div>
        <div className="flex">
          <div className="flex">
            <CiViewTimeline />
            <span className="text-xs opacity-80 font-medium pl-1">
              All Tasks
            </span>
          </div>
          <div className="flex px-4">
            <CiSliderHorizontal />
            <span className="text-xs opacity-80 font-medium pl-1">Filters</span>
          </div>
          <div className="flex">
            <CiSliderVertical />
            <span className="text-xs opacity-80 font-medium pl-1">Sort</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
