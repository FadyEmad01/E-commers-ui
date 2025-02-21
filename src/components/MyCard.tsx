import Image from "next/image";
import { Badge } from "./ui/badge";

interface MyCardProps {
  name: string;
  inStock: boolean;
  price: string;
  img: string;
}

export default function MyCard(props: MyCardProps) {
  return (
    <>
      <div className="flex flex-col gap-y-4">
        <div className="bg-[#F6F6F6] rounded w-full aspect-[3/4] overflow-hidden">
          <div className="w-full h-full flex justify-center items-center">
            <Image
              src={props.img}
              alt="t-shirt"
              className="w-full h-auto object-none"
              quality={100}
              width={300}
              height={0}
            />
          </div>
        </div>

        <h5 className="font-medium">{props.name}</h5>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="rounded-full font-medium py-1">
            {props.inStock ? "IN STOCK" : "OUT OF STOCK"}
          </Badge>
          <h6 className="text-[#474B57]">{props.price}</h6>
        </div>
      </div>
    </>
  );
}
