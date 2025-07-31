import items from "@/utile/types/data/items.json";
import Cards from "@/components/Cards";
import Hanout from "@/components/hanout";
import type { CardItem } from "@/utile/types/file";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Hanout />
      <Cards data={items as CardItem[]} cols={4} className="p-8" />
    </div>
  );
}
