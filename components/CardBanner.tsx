export type props = {
  buttonText?: string;
};

const CardBanner = ({ ...props }: props) => {
  return (
    <div className="card__banner overflow-hidden pb-7 pt-7 flex items-center flex-col justify-between h-96">
      <img
        src="/image/nike-logo-1.png"
        alt=""
        className="hover:scale-110 transition duration-200 cursor-pointer"
      />
      <a
        href="#"
        className="mx-auto bg-black text-white rounded-full py-1 px-2"
      >
        {props.buttonText}
      </a>
    </div>
  );
};

export default CardBanner;
