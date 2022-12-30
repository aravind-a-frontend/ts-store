import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../product-card/product-card.component';

const CategoryProducts = () => {
  const { products } = useContext(ProductsContext);
  const { category } = useParams();

  return (
    <div className="products-container">
      {products
        .filter((x) => x.category === category)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};

export default CategoryProducts;
