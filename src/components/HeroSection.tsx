import React from 'react'

const HeroSection = () => {
  return (
    <section className="mx-auto w-full flex-col space-y-12 p-5 md:-mt-16 md:space-y-12 md:p-32">
      <div className="mt-16 flex flex-col items-center px-2 md:mt-24">
        <h1 className="w-full max-w-[550px] text-center text-[2.75rem] font-bold leading-none md:max-w-[780px] md:text-7xl xl:text-[5.5rem]">
          Sports Highlights in One Place
        </h1>
        <p className="mt-8 max-w-[35ch] text-center text-xl font-thin md:text-2xl xl:text-3xl">
          Don&#39;t miss a single game or highlight again. We&#39;re passionate
          about bringing you the latest and greatest moments in sports.
        </p>
      </div>
    </section>
  );
}

export default HeroSection