import { BEST_SELLING_DATA } from "@/data/BestSellingData";
import { Container } from "./Container";
import MyCard from "./MyCard";

export default function BestSelling() {
    const BestSellingData = BEST_SELLING_DATA;
  return (
    <>
      <Container>
        <div className="w-full pt-5 py-10">
          <div className="flex justify-center mb-20">
            <div>
              <p className="text-[12px] text-[#878A92]">Shop Now</p>
              <h2 className="font-semibold text-2xl">Best Selling</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10 gap-5 mb-24">
            {BestSellingData.map((data) => (
              <MyCard key={data.id} img={data.img} name={data.name} inStock={data.inStock} price={data.price} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
