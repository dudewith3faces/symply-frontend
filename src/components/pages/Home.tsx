import { Card } from "../common";
import { HomeService } from "../services";

export const Home = () => {
  const { facts, addFav } = HomeService();
  return (
    <section className='d-flex h-100 flex-column'>
      {facts.map(({ text, id }) => (
        <Card title={text} key={id} id={id} onClick={addFav} />
      ))}
    </section>
  );
};
