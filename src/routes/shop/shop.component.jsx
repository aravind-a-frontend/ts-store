import { Routes, Route } from 'react-router-dom';

import ProductsItem from '../../components/products-item/products-item.component';
import CategoryProducts from '../../components/category-products/category-products.component';

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductsItem />} />
      <Route path=":category" element={<CategoryProducts />} />
    </Routes>
  );
};

export default Shop;
