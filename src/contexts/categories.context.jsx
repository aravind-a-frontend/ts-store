import { createContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const CategoriesContext = createContext({
  categories: [],
});

export const CategoriesProvider = ({ children }) => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);

  const fetchData = () => {
    return fetch(`https://fakestoreapi.com/products/category/${id}`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = { categories };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
