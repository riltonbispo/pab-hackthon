import CardList from "$store/components/CardList.tsx";

export type props = {
  title?: string;
};

const LastSizes = ({ ...props }: props) => {
  return (
    <div className="w-5/6 mx-auto my-16">
      {props.title && (
        <h3 className="text-center text-3xl mb-10">{props.title}</h3>
      )}
      <CardList />
    </div>
  );
};

export default LastSizes;
