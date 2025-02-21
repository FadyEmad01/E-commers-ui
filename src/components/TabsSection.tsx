"use client";
import { BEST_SELLING_DATA } from "@/data/BestSellingData";
import { Container } from "./Container";
import MyCard from "./MyCard";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { FEATURED_DATA } from "@/data/FeaturedData";

export default function TabsSection() {
  const [tabs, setTabs] = useState("Featured");
  const BestSellingData = BEST_SELLING_DATA;
  const FeaturedData = FEATURED_DATA;
  return (
    <>
      <Container>
        <div className="w-full pt-5 py-10">
          <div className="flex justify-center mb-20">
            <div className="flex gap-4">
              <Button
                onClick={() => setTabs("Featured")}
                variant={tabs === "Featured" ? "outline" : "ghost"}
                className={cn(
                  "rounded-full",
                  tabs === "Latest" ? "text-[#5C5F6A]" : ""
                )}
              >
                Featured
              </Button>
              <Button
                onClick={() => setTabs("Latest")}
                variant={tabs === "Latest" ? "outline" : "ghost"}
                className={cn(
                  "rounded-full",
                  tabs === "Featured" ? "text-[#5C5F6A]" : ""
                )}
              >
                Latest
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-5 mb-24">
            {tabs === "Featured" ? (
              <>
                {FeaturedData.map((data) => (
                  <MyCard
                    key={data.id}
                    img={data.img}
                    name={data.name}
                    inStock={data.inStock}
                    price={data.price}
                  />
                ))}
              </>
            ) : (
              <>
                {BestSellingData.map((data) => (
                  <MyCard
                    key={data.id}
                    img={data.img}
                    name={data.name}
                    inStock={data.inStock}
                    price={data.price}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
