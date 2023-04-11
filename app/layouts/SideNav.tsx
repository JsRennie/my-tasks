"use client";

import React from "react";
import Link from "next/link";
import { GiWhaleTail } from "react-icons/gi";
import { CiHome, CiCircleList, CiMail, CiTrophy } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { RiTeamFill } from "react-icons/ri";
import { Paper, Avatar } from "@mui/material";

const SideNav = () => {
  return (
    <nav className="h-screen w-1/6 border-r border-black border-opacity-70">
      <div className="px-4">
        <div className="flex pt-4">
          <GiWhaleTail size={30} color="black" />
          <div className="pl-2">
            <p className="text-xs">
              The <span className="text-xs font-bold block">Whale</span>
            </p>
          </div>
        </div>
        <div className="items-center mt-12 mb-4">
          <div className="flex pb-2">
            <CiHome size={20} />
            <Link href={"#"}>
              <span className="text-sm font-medium pl-2 flex">Home</span>
            </Link>
          </div>
          <div className="flex pb-2">
            <CiCircleList size={20} />
            <Link href={"#"}>
              <span className="text-sm font-medium pl-2 flex">My Tasks</span>
            </Link>
          </div>
          <div className="flex pb-2">
            <CiMail size={20} />
            <Link href={"#"}>
              <span className="text-sm font-medium pl-2 flex">Inbox</span>
            </Link>
          </div>
          <div className="flex pb-2">
            <CiTrophy size={20} />
            <Link href={"#"}>
              <span className="text-sm font-medium pl-2 flex">Goals</span>
            </Link>
          </div>
        </div>
        <Paper elevation={3} className="w-40 h-fit">
          <div className="py-3 text-center">
            <p className="text-sm font-semibold">My Projects</p>
          </div>
          <div className="bg-slate-200">
            <div className="flex mb-2 pt-2">
              <IoMdArrowDropright />
              <span className="text-xs font-medium">Website Design</span>
            </div>
            <div className="flex mb-2">
              <IoMdArrowDropright />
              <span className="text-xs font-medium">Branding</span>
            </div>
            <div className="flex pb-2">
              <IoMdArrowDropright />
              <span className="text-xs font-medium">User Testing</span>
            </div>
          </div>
        </Paper>
        <div className="mt-20">
          <hr />
          <div className="flex items-center py-4">
            <RiTeamFill size={20} color="blue" />
            <span className="text-xs pl-2">Invite Teammates</span>
          </div>
          <hr />
          <div className="flex pt-2">
            <Avatar
              alt="P"
              src="profile.jpg"
              sx={{ width: 30, height: 30 }}
              className="bg-no-repeat bg-center bg-cover"
            />
            <div className="pl-2">
              <div className="flex">
                <p className="text-xs font-semibold">Renson Gerald</p>
                <MdKeyboardArrowDown />
              </div>
              <span className="text-xs opacity-50 font-semibold">
                renson@design.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
