import { ArrowRightIcon } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./ui/button";

export default function Browse() {
  return (
    <>
      <section className="w-full bg-[#F6F6F6] mb-24">
        <Container className="h-full">
          <div className="w-full h-full grid grid-cols-2 items-center">
            <div className="md:col-span-1 col-span-full py-20">
              <div className="block w-full">
                <h1 className="text-2xl font-semibold text-center md:text-start">
                  Browse Our Fashion Paradise!
                </h1>
                <p className="text-[#474B57] text-[14px] mt-3 mb-9 text-center md:text-start">
                  Step into a world of style and explore our diverse collection
                  of <br className="md:block hidden" /> clothing categories.
                </p>
                <div className="flex justify-center md:justify-start">
                  <Button className="group py-6 px-8">
                    Start Browsing
                    <ArrowRightIcon
                      className="-me-1 transition-transform group-hover:translate-x-0.5"
                      size={16}
                      aria-hidden="true"
                    />
                  </Button>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 col-span-full justify-self-center self-start">
              <img src="/crop-top.png" alt="hero" className="w-[250px] h-auto" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
