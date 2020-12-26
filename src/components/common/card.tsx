import { ICardProps } from "../interface";

export const Card = ({ title, id, onClick, fav = false }: ICardProps) => {
  const name = fav ? "btn btn-danger" : "btn btn-primary";
  return (
    <div className='card my-1'>
      <div className='card-body'>
        <p className='card-text'>{title}</p>
        <button className={name} onClick={() => onClick({ text: title, id })}>
          favourite
        </button>
      </div>
    </div>
  );
};
