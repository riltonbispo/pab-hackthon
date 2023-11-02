import { cardType } from "../cardType.ts";
const Card = ({ ...props }: cardType) => {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="overflow-hidden">
          <img
            src={props.img}
            className="w-full hover:scale-110 transition duration-200 cursor-pointer"
          />
        </div>
        <h4 className="font-bold text-2xl">{props.title}</h4>
        <div className="flex gap-1">
          <span className="text-zinc-500 line-through font-thin">
            {props.oldPrice}
          </span>
          <span className="text-emerald-500">{props.newPrice}</span>
        </div>
        <span className="font-light text-lg">{props.details}</span>
      </div>
    </div>
  );
};

export default Card;
