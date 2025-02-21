"use client";

import Link from "next/link";
import { Container } from "./Container";
import Image from "next/image";
import { ChevronDownIcon, SearchIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <Container>
      <header className="bg-white mb-5">
        <nav className="flex items-center justify-between pt-8">
          <div className="flex items-center xl:gap-x-16 lg:gap-x-8">
            <Link href="/">
              <Image
                src="/Header.svg"
                alt="Logo"
                width={160}
                height={0}
                quality={100}
                priority={true}
                className="w-[160px] h-auto"
              />
            </Link>
            <div className="lg:flex items-center xl:gap-x-8  pt-1 hidden">
              <Link href="/">
                <Button variant="link" className="text-navText">
                  Home
                </Button>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="focus:outline-none outline-none active:outline-none border-none"
                >
                  <Button
                    variant="link"
                    className="focus:outline-none outline-none active:outline-none border-none text-navText"
                  >
                    Categories
                    <ChevronDownIcon
                      className="-me-1 opacity-60"
                      size={16}
                      aria-hidden="true"
                    />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-(--radix-dropdown-menu-trigger-width)">
                  <DropdownMenuItem>Option 1</DropdownMenuItem>
                  <DropdownMenuItem>Option 2</DropdownMenuItem>
                  <DropdownMenuItem>Option 3</DropdownMenuItem>
                  <DropdownMenuItem>Option 4</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/">
                <Button variant="link" className="text-navText">
                  About
                </Button>
              </Link>
              <Link href="/">
                <Button variant="link" className="text-navText">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <div className="*:not-first:mt-2 hidden sm:block">
              <div className="relative">
                <Input
                  className="peer ps-11 pe-9 h-12"
                  placeholder="Search products"
                  type="search"
                />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  <SearchIcon size={24} />
                </div>
              </div>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/cart.svg"
                  alt="Cart"
                  width={24}
                  height={24}
                  quality={100}
                  priority={true}
                />
              </Link>
            </div>
            <div>
              <Link href="/">
                <Image
                  src="/User.svg"
                  alt="Cart"
                  width={26}
                  height={26}
                  quality={100}
                  priority={true}
                />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </Container>
  );
}
