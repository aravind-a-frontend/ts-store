import { Outlet } from 'react-router-dom';

import CategoryGroup from '../../components/category-group/category-group.component';

const Home = () => {
  return (
    <div>
      <CategoryGroup />
      <Outlet />
    </div>
  );
};

export default Home;
