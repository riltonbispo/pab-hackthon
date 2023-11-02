import Card from "$store/components/Card.tsx";
import { shoesList } from "$store/data.ts";

export type props = {
  title: string;
};

const LastSizes = ({ ...props }: props) => {
  return (
    <div className="w-5/6 mx-auto my-16">
      <h3 className="text-center text-3xl mb-10">{props.title}</h3>
      <div className="grid grid-cols-4 gap-2">
        {shoesList.map((item) => <Card {...item}>{item.title}</Card>)}
      </div>
    </div>
  );
};

export default LastSizes;
