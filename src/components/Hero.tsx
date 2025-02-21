import { ArrowRightIcon } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>
      <section className="w-full lg:h-[70vh] bg-[#F6F6F6]">
        <Container className="h-full">
          <div className="w-full h-full grid grid-cols-2 items-center">
            <div className="md:col-span-1 col-span-full pt-40 pb-20">
              <div className="block w-full">
                <h1 className="text-4xl font-semibold text-center md:text-start">
                  Fresh Arrivals Online
                </h1>
                <p className="text-[#474B57] text-base mt-3 mb-9 text-center md:text-start">
                  Discover Our Newest Collection Today.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button className="group py-6 px-8">
                    View Collection
                    <ArrowRightIcon
                      className="-me-1 transition-transform group-hover:translate-x-0.5"
                      size={16}
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 col-span-full justify-self-center self-end">
              <img src="/Group 1.png" alt="hero" className="w-[350px] h-auto" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
