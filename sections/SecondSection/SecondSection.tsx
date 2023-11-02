import CardList from "$store/components/CardList.tsx";
import CardBanner from "$store/components/CardBanner.tsx";

export type props = {
  title: string;
  subTitle: string;
};

const SecondSection = ({ ...props }: props) => {
  return (
    <div className="w-5/6 mx-auto my-16">
      <div>
        <header className="flex items-center justify-between w-full mb-11">
          <h3 className="text-xl font-semibold">{props.title}</h3>
          <span>{props.subTitle}</span>
        </header>
        <div className="flex gap-2">
          <div>
            <CardBanner buttonText="Ver Todos" />
          </div>
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
