import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Container>
        <footer className="relative bg-background text-foreground transition-colors duration-300">
          <div className="container mx-auto">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="relative">
                <Image
                  src="/Footer.svg"
                  className="w-[160px] h-auto mb-4"
                  quality={100}
                  alt="logo"
                  width={160}
                  height={0}
                />
                <p className="mb-6 text-muted-foreground">
                  DevCut is a YouTube channel for practical project-based
                  learning.
                </p>
                <div className="flex gap-4">
                  <Link href="/">
                    <Image
                      src="/Github.svg"
                      quality={100}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/Instagram.svg"
                      quality={100}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                  </Link>
                  <Link href="/">
                    <Image
                      src="/Youtube.svg"
                      quality={100}
                      alt="logo"
                      width={30}
                      height={30}
                    />
                  </Link>
                </div>
              </div>
              <div className="flex gap-8 items-start justify-between flex-wrap">
                <div>
                  <h3 className="mb-4 text-lg text-[#878A92] font-semibold">
                    SUPPORT
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      FAQ
                    </a>
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      Terms of use
                    </a>
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </nav>
                </div>
                <div>
                  <h3 className="mb-4 text-lg text-[#878A92] font-semibold">
                    COMPANY
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      About us
                    </a>
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      Contact
                    </a>
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      Careers
                    </a>
                  </nav>
                </div>
                <div className="relative">
                  <h3 className="mb-4 text-lg text-[#878A92] font-semibold">
                    SHOP
                  </h3>
                  <nav className="space-y-2 text-sm">
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      My Account
                    </a>
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      Checkout
                    </a>
                    <a
                      href="#"
                      className="block transition-colors hover:text-primary"
                    >
                      Cart
                    </a>
                  </nav>
                </div>
              </div>
              <div>
                <div className="lg:justify-self-center">
                  <h3 className="mb-4 text-lg text-[#878A92] font-semibold">
                    ACCEPTED PAYMENTS
                  </h3>
                  <div className="flex gap-4 items-center md:justify-between">
                    <Link href="/">
                      <Image
                        src="/master-card.svg"
                        quality={100}
                        className="saturate-0"
                        // className="grayscale-0"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="/">
                      <Image
                        src="/amex.svg"
                        quality={100}
                        className="saturate-0"
                         // className="grayscale-0"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                    <Link href="/">
                      <Image
                        src="/visa.svg"
                        quality={100}
                        className="saturate-0"
                         // className="grayscale-0"
                        alt="logo"
                        width={30}
                        height={30}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-12 py-8 flex-col items-center justify-center gap-4 border-t text-center md:flex-row">
              <p className="text-sm text-muted-foreground">
                © 2023 DevCut. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
}
