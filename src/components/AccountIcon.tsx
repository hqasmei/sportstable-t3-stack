"use client";

import Image from "next/image";
import React from "react";
import type { FC } from "react";
import classNames from "classnames";

interface Props {
  name: string;
  size?: "sm" | "md" | "lg";
  image?: string;
}

const AccountIcon: FC<Props> = ({ name, size = "md", image }) => {
  const initials = `${name.charAt(0)}`;
  const sizes = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-12 h-12 text-lg",
  };
  const sizeClass = sizes[size];

  return (
    <>
      {image ? (
        <Image
          src={image}
          alt="profile image"
          width={30}
          height={30}
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:block"
        />
      ) : (
        <div
          className={classNames(
            "flex items-center justify-center rounded-full font-bold uppercase text-white",
            sizeClass,
            "bg-blue-500"
          )}
        >
          {initials}
        </div>
      )}
    </>
  );
};

export default AccountIcon;
