import Link from "next/link";
import { HiOutlineArrowLeft } from "react-icons/hi";
import SignInForm from "~/components/SignInForm";

export default function SignInPage() {
  return (
    <div className="min-h-screen">
      <Link href="/" className="group flex flex-row space-x-1 p-4 text-white ">
        <HiOutlineArrowLeft size={25} className="group-hover:text-white/50" />
        <span className="group-hover:text-white/50"> Back</span>
      </Link>
      <div className="flex  flex-col items-center justify-center lg:col-span-1 ">
        <main className="flex flex-col items-center justify-center lg:col-span-1 ">
          <div className="px-4 py-8 sm:px-12 sm:py-12">
            <h1 className="mb-2 mt-4 text-center text-3xl font-extrabold text-white sm:text-4xl">
              Sign in to your account
            </h1>

            <p className="mb-10 text-center text-gray-600">
              or <span className="font-semibold">create your account</span>
            </p>

            <SignInForm />
          </div>
        </main>
      </div>
    </div>
  );
}
