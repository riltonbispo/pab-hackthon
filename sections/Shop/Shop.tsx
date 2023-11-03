import CardList from "$store/components/CardList.tsx";

export type props = {
  title: string;
  subTitle: string;
};

const Shop = ({ ...props }: props) => {
  return (
    <div className="w-5/6 mx-auto my-16">
      <div>
        <header className="flex items-center justify-between w-full mb-11">
          <h3 className="text-xl font-semibold">{props.title}</h3>
          <span>{props.subTitle}</span>
        </header>
        <div>
          <div>
          </div>
          <div>
            <CardList />
            <CardList />
            <CardList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
