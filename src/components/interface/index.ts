export interface ICardProps {
  fav?: boolean;
  title: string;
  id: string;
  onClick: (data: IFact) => void;
}

export interface IFact {
  text: string;
  id: string;
}

export interface IResponse<T = undefined> {
  payload: T;
  message: string;
  isError: boolean;
}
