import Comments from '../../components/Comments';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <Link to="/comments" className="text-white">
          <h1 className='text-2xl'>Link to Comment/reply section</h1>
        </Link>
      </div>  
    </div>
  );
};
