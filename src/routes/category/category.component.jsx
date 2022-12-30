import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import ProductCard from '../../components/product-card/product-card.component';

const Category = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {categories.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Category;
