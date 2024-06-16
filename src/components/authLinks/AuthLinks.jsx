"use client";

import Link from "next/link";
import { useState } from "react";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const AuthLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);
  // temporary
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link className="hidden sm:flex" href="/login">
          Login
        </Link>
      ) : (
        <>
          <Link className="hidden sm:flex" href="/write">
            Write
          </Link>
          <span className="cursor-pointer hidden sm:flex">Logout</span>
        </>
      )}
      {isOpen ? (
        <IoClose
          className="w-10 h-10 p-2 cursor-pointer text-[var(--textColor)] sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      ) : (
        <IoMenu
          className="w-10 h-10 p-2 cursor-pointer text-[var(--textColor)] sm:hidden"
          onClick={() => setIsOpen(true)}
        />
      )}
      {isOpen && (
        <div className="absolute top-[100px] left-0 bg-[var(--bg)] h-[calc(100vh-100px)] w-full flex flex-col items-center justify-center gap-[50px] text-2xl z-30 sm:hidden">
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
