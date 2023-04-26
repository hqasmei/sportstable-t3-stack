import Image from "next/image";
import { TESTIMONIALS } from "../utils/constants";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className={`transform rounded-md bg-neutral-800 p-6 shadow-md  
                ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
              >
                <p className="mb-4 text-neutral-100">{testimonial.quote}</p>
                <div className="flex flex-row items-center space-x-2">
                  <div>
                    <Image
                      src={testimonial.image ?? ""}
                      alt=""
                      width={65}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-100">
                      {testimonial.name}
                    </p>
                    <p className="text-neutral-300">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
