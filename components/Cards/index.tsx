import type { CardItem } from "@/utile/types/interfaces";
import type { FC } from "react";

type CardsProps = {
  data: CardItem[];
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Cards: FC<CardsProps> = ({ data, className = "", cols = 3 }) => {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
    6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6",
  };

  return (
    <div className={className}>
      <div className={`grid ${gridCols[cols]} gap-6`}>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

type CardProps = {
  item: CardItem;
};

const Card: FC<CardProps> = ({ item }) => (
  <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-[1.02] hover:shadow-lg cursor-pointer">
    <div className="w-full h-64 flex items-center justify-center mb-4 overflow-hidden rounded-t-lg">
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-contain hover:opacity-90 transition-opacity"
      />
    </div>

    <div className="text-lg font-medium text-gray-800">{item.title}</div>
    <div className="mt-2">
      <span className="line-through text-gray-500 mr-2">{item.oldPrice}</span>
      <span className="font-semibold text-yellow-700">{item.price}</span>
    </div>
    {item.description && (
      <div className="mt-2 text-sm text-gray-500">{item.description}</div>
    )}
  </div>
);

export default Cards;
