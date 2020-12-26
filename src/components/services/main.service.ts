import axios from "axios";
import { useEffect, useState } from "react";
import { IFact, IResponse } from "../interface";

export const HomeService = () => {
  const [facts, setFacts] = useState<IFact[]>([]);

  const getFacts = async (): Promise<IFact[]> => {
    const { data } = await axios.get<{ text: string; _id: string }[]>(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=10"
    );

    const payload: IFact[] = [];

    data.forEach(({ text, _id }) => payload.push({ text, id: _id }));
    return payload;
    // return [
    //   { title: "Another", id: "1" },
    //   { title: "Home", id: "2" },
    //   { title: "Another one", id: "3" },
    //   { title: "fuck you", id: "4" },
    // ];
  };

  useEffect(() => {
    getFacts().then((data) => setFacts(data));
  }, []);

  const addFav = async (data: IFact) => {
    await axios.post<IResponse>("http://localhost:5000/api/fact", data);
    return;
  };

  return { facts, addFav };
};

export const BackendService = () => {
  const [favs, setFav] = useState<IFact[]>([]);

  const getFav = async () => {
    const {
      data: { payload },
    } = await axios.get<IResponse<IFact[]>>("http://localhost:5000/api/fact");
    return payload;
    // return [
    //   { title: "Another one", id: "3" },
    //   { title: "fuck you", id: "4" },
    // ];
  };

  useEffect(() => {
    getFav().then((data) => setFav(data));
  }, []);

  const removeFav = async (value: IFact) => {
    await axios.delete<IResponse>(`http://localhost:5000/api/fact/${value.id}`);
    const data = favs.filter(({ id }) => id !== value.id);
    setFav(data);
  };

  return { favs, removeFav };
};
