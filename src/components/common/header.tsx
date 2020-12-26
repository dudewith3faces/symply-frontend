import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section className='row'>
      <div className='col-6 p-3'>
        <Link to='/' className='text-primary'>
          Home
        </Link>
      </div>
      <div className='col-6 p-3'>
        <Link to='/saved' className='text-danger'>
          Saved
        </Link>
      </div>
    </section>
  );
};
