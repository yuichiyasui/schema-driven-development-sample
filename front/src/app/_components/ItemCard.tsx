import Image from "next/image";

type Props = {
  item: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
  };
};

export const ItemCard = ({ item }: Props) => {
  return (
    <div className="flex gap-x-4">
      <Image width={100} height={100} src={item.imageUrl} alt="" unoptimized />
      <div>
        <p>{"ID: " + item.id}</p>
        <p>{item.name}</p>
        <p>{"¥" + item.price}</p>
      </div>
    </div>
  );
};
