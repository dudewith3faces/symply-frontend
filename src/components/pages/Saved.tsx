import { BackendService } from "../services";
import { Card } from "../common";

export const Saved = () => {
  const { favs, removeFav } = BackendService();
  return (
    <section className='d-flex flex-column'>
      {favs.map(({ text, id }) => (
        <Card title={text} key={id} id={id} onClick={removeFav} fav={true} />
      ))}
    </section>
  );
};
