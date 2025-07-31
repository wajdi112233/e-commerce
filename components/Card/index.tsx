import type { FC } from "react";

import type { CardItem } from "@/utile/types/interfaces";
type CardComponentProps = {
  item: CardItem;
};

const Card: FC<CardComponentProps> = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col items-center">
      <div className="bg-white rounded-lg  shadow-md w-full h-64 flex items-center justify-center mb-4 overflow-hidden object-center">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain"
        ></img>
      </div>
      <div className="text-lg font-medium text-gray-500">{item.title}</div>
      <div className="mt-2">
        <span className="line-through text-gray-500 mr-2">{item.oldPrice}</span>
        <span className="font-semibold text-gray-500">{item.price}</span>
      </div>
    </div>
  );
};

export default Card;
