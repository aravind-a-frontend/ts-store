import CategoryItem from '../category-item/category-item.component';

import { CategoryGroupContainer } from './category-group.styles';

const categories = [
  {
    id: 1,
    title: 'Womens',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    route: "shop/women's clothing",
  },
  {
    id: 2,
    title: 'Mens',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    route: "shop/men's clothing",
  },
  {
    id: 3,
    title: 'Jewelery',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    route: 'shop/jewelery',
  },
  {
    id: 4,
    title: 'Electronics',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    route: 'shop/electronics',
  },
];

const CategoryGroup = () => {
  return (
    <CategoryGroupContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoryGroupContainer>
  );
};

export default CategoryGroup;
