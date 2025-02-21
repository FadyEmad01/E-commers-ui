import Image from "next/image";
import { Container } from "./Container";

export default function Features() {
  return (
    <div className="py-24">
      <Container>
        <div className="grid grid-flow-col gird-cols-3  lg:gap-40 gap-16">
          <div className="md:col-span-1 col-span-full">
            <div className="bg-[#F6F6F6] size-12 rounded-full flex justify-center items-center">
              <Image
                src="/24px.svg"
                alt="hero"
                quality={100}
                width={24}
                height={24}
              />
            </div>
            <h5 className="my-4 font-semibold">Free Shipping</h5>
            <p className="text-[#5C5F6A] text-[14px]">
              Upgrade your style today and get FREE shipping on all orders!
              Don&apos;t miss out.
            </p>
          </div>
          <div className="md:col-span-1 col-span-full">
            <div className="bg-[#F6F6F6] size-12 rounded-full flex justify-center items-center">
              <Image
                src="/Vector.svg"
                alt="hero"
                quality={100}
                width={24}
                height={24}
              />
            </div>
            <h5 className="my-4 font-semibold">Satisfaction Guarantee</h5>
            <p className="text-[#5C5F6A] text-[14px]">
              Shop confidently with our Satisfaction Guarantee: Love it or get a
              refund.
            </p>
          </div>
          <div className="md:col-span-1 col-span-full">
            <div className="bg-[#F6F6F6] size-12 rounded-full flex justify-center items-center">
              <Image
                src="/Vector1.svg"
                alt="hero"
                quality={100}
                width={24}
                height={24}
              />
            </div>
            <h5 className="my-4 font-semibold">Secure Payment</h5>
            <p className="text-[#5C5F6A] text-[14px]">
              Your security is our priority. Your payments are secure with us.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
