import { Routes, Route } from 'react-router-dom';

import ProductsItem from '../../components/products-item/products-item.component';
import Category from '../category/category.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductsItem />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
