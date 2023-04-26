"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import AccountIcon from "./AccountIcon";
import { HiOutlinePower } from "react-icons/hi2";
// import { AiOutlineUser } from "react-icons/ai";
import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
// import { IoNotificationsCircleOutline } from "react-icons/io5";
import { Popover, PopoverContent, PopoverTrigger } from "./AccountPopover";

import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: sessionData } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="mx-4 md:mx-10">
      <div className="flex flex-row items-center justify-between py-4">
        {sessionData ? (
          <Link href="/dashboard">
            <Image src="/logo-1.png" alt="logo" width={100} height={100} />
          </Link>
        ) : (
          <Link href="/">
            <Image src="/logo-1.png" alt="logo" width={100} height={100} />
          </Link>
        )}

        <div className="flex-row space-x-2 sm:flex">
          {sessionData ? (
            <>
              <div className="block sm:hidden">
                <button className="" onClick={toggleMenu}>
                  {isMenuOpen ? (
                    <IoMdClose size={25} className="text-neutral-100" />
                  ) : (
                    <CgMenuRight size={25} className="text-neutral-100" />
                  )}
                </button>
              </div>

              {isMenuOpen && (
                <div className="fixed bottom-0 left-0 right-0 top-16 z-50 overflow-y-auto bg-neutral-900 outline-none">
                  <div className="flex w-full flex-col items-center space-y-6 pt-8 text-neutral-200">
                    <Link
                      href="/dashboard"
                      className=" text-3xl font-bold focus:outline-none  focus-visible:ring-2 focus-visible:ring-pink-700"
                      onClick={handleLinkClick}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/favorites"
                      className=" text-3xl font-bold focus:outline-none  focus-visible:ring-2 focus-visible:ring-pink-700"
                      onClick={handleLinkClick}
                    >
                      Favorites
                    </Link>
                    {/* <Link
                      href="/dashboard"
                      className=" text-3xl font-bold focus:outline-none  focus-visible:ring-2 focus-visible:ring-pink-700"
                      onClick={handleLinkClick}
                    >
                      Account
                    </Link> */}
                    <button
                      onClick={() => void signOut()}
                      className="text-3xl font-bold focus:outline-none  focus-visible:ring-2 focus-visible:ring-pink-700"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
              <div className="hidden items-center space-x-4 sm:flex sm:flex-row">
                <Link
                  href="/dashboard"
                  className={
                    pathname == "/dashboard"
                      ? "font-bold text-neutral-300"
                      : "font-light text-neutral-400 hover:text-neutral-300"
                  }
                >
                  Dashboard
                </Link>
                <Link
                  href="/favorites"
                  className={
                    pathname == "/favorites"
                      ? "font-bold text-neutral-300"
                      : "font-light text-neutral-400 hover:text-neutral-300"
                  }
                >
                  Favorites
                </Link>
                {/* <Popover>
                <PopoverTrigger>
                  <IoNotificationsCircleOutline
                    size={34}
                    className="text-neutral-300"
                  />
                </PopoverTrigger>
                <PopoverContent></PopoverContent>
              </Popover> */}
                <Popover>
                  <PopoverTrigger>
                    <AccountIcon
                      name={sessionData.user.name ?? "Unknown"}
                      image={sessionData.user.image ?? undefined}
                      size="lg"
                    />
                  </PopoverTrigger>
                  <PopoverContent>
                    {/* <div className="rounded-md hover:bg-neutral-800">
                      <button
                        className="group flex flex-row items-center space-x-1 px-2"
                        onClick={() => void signOut()}
                      >
                        <AiOutlineUser
                          size={20}
                          className="text-neutral-400 group-hover:text-neutral-200"
                        />
                        <span className="rounded p-1 text-neutral-400 group-hover:text-neutral-200">
                          Account Settings
                        </span>
                      </button>
                    </div>
                    <div
                      role="separator"
                      aria-orientation="horizontal"
                      className="my-2 h-px w-full bg-neutral-700"
                    ></div> */}

                    <button
                      className="w-full rounded-md hover:bg-neutral-800"
                      onClick={() => void signOut()}
                    >
                      <div className="group flex flex-row items-center space-x-1 px-2">
                        <HiOutlinePower
                          size={20}
                          className="text-red-800  group-hover:text-red-700"
                        />
                        <span className="rounded p-1 text-red-800 group-hover:text-red-700">
                          Logout
                        </span>
                      </div>
                    </button>
                  </PopoverContent>
                </Popover>
              </div>
            </>
          ) : (
            <button
              className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 dark:focus:ring-neutral-400 dark:focus:ring-offset-neutral-900 dark:data-[state=open]:bg-neutral-800"
              onClick={() => void signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
