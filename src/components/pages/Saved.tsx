import { BackendService } from "../services";
import { Card } from "../common";

export const Saved = () => {
  const { favs, removeFav } = BackendService();
  return (
    <section className='d-flex flex-column'>
      {favs.length > 1 ? (
        favs.map(({ text, id }) => (
          <Card title={text} key={id} id={id} onClick={removeFav} fav={true} />
        ))
      ) : (
        <div>you have not saved facts</div>
      )}
    </section>
  );
};
