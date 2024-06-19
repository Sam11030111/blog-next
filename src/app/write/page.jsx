"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { CiCirclePlus } from "react-icons/ci";
import { BsCardImage } from "react-icons/bs";
import { BiExport } from "react-icons/bi";
import { GoVideo } from "react-icons/go";

const WritePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        className="p-[50px] text-[50px] border-0 outline-none bg-transparent placeholder:text-[#b3b3b1]"
        type="text"
        placeholder="Title"
      />
      <div className="flex gap-5 h-[700px] relative">
        <button
          className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <CiCirclePlus className="text-4xl" />
        </button>
        {isOpen && (
          <div className="flex gap-5 bg-[var(--bg)] absolute z-50 w-full left-[50px]">
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <BsCardImage />
            </button>
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <BiExport />
            </button>
            <button className="w-9 h-9 rounded-full border border-[#1a8917] flex items-center justify-center cursor-pointer">
              <GoVideo />
            </button>
          </div>
        )}
        <ReactQuill
          className="w-full"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className="absolute top-[100px] right-[20px] bg-[#1a8917] py-2 px-4 text-white cursor-pointer rounded-[20px]">
        Publish
      </button>
    </div>
  );
};

export default WritePage;
