import Card from "$store/components/Card.tsx";
import { shoesList } from "$store/data.ts";

const CardList = () => {
  return (
    <>
      <div className="flex gap-2">
        {shoesList.map((item) => <Card {...item}>{item.title}</Card>)}
      </div>
    </>
  );
};

export default CardList;
