import { Container } from "./Container";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Join() {
  return (
    <>
      <section className="w-full bg-[#F6F6F6] mb-24">
        <Container className="h-full">
          <div className="w-full h-full  items-center">
            <div className="flex flex-col md:flex-row justify-between items-center py-20 md:gap-8">
              <div className="block w-full">
                <h1 className="text-2xl font-semibold text-center md:text-start">
                  Join Our Newsletter
                </h1>
                <p className="text-[#474B57] text-[14px] mt-3 text-center md:text-start">
                  We love to surprise our subscribers with occasional gifts.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="flex gap-4">
                  <Input className="flex-1 lg:w-72 md:w-52 h-12" placeholder="Your email address" type="email" />
                  <Button className="py-6 px-8" variant="default">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
