"use client";

// import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";

// import { z } from "zod";

// const schema = z.object({
//   email: z.string().email(),
// });

// type FormValues = z.infer<typeof schema>;

// const initialState: FormValues = {
//   email: "",
// };

const SignInForm = () => {
  // const [formData, setFormData] = useState<FormValues>(initialState);
  // const [error, setError] = useState<string>("");

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!formData) return false;
  //   let emailData = formData.email;
  //   console.log(emailData);
  //   signIn("email", { emailData, redirect: false });
  // };

  return (
    <div className="mx-auto max-w-md rounded-md   border border-neutral-700 bg-neutral-800 bg-opacity-30 p-6  px-6 py-8 shadow backdrop-blur-lg  backdrop-filter sm:px-10 sm:py-10">
      <button
        onClick={() => void signIn("google")}
        className="mx-auto mb-4 flex h-[46px] w-full items-center justify-center space-x-2 rounded-md border bg-white p-2 text-gray-500 transition-colors hover:border-gray-400 hover:bg-gray-50 hover:text-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-opacity-25 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-gray-200 disabled:hover:bg-transparent disabled:hover:text-gray-500"
      >
        <FcGoogle size={25} />
        <span>Sign in with Google</span>
      </button>

      {/* <div className="my-10 flex items-center justify-center space-x-4">
        <span className="h-px w-full border-t border-gray-300"></span>
        <p className="flex-1 whitespace-nowrap text-gray-500">
          or continue with
        </p>
        <span className="h-px w-full border-t border-gray-300"></span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email" className="text-gray-600">
            Email address
          </label>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <input
                id="email"
                type="text"
                className="w-full truncate rounded-md border border-gray-300 py-2 pl-4 pr-4 shadow-sm transition focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-20 disabled:cursor-not-allowed disabled:opacity-50"
                name="email"
                placeholder="Enter your email address"
                spellCheck="false"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          {error && (
            <div className="text-sm text-red-500">{`Error: ${error}`}</div>
          )}
        </div>
        <button
          type="submit"
          className="mt-6 w-full rounded-md bg-blue-700 px-8 py-2 text-white transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-700 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-700"
        >
          Sign in
        </button>
      </form> */}
    </div>
  );
};

export default SignInForm;
