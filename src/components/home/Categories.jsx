import React from "react";
import * as Images from "../../assets/photos";
import { CategoryCard } from "../shared";
const categoriesArray = [
  {
    image: Images.Table1,
    title: "Side table",
    path: "/"
  },
  {
    image: Images.Sofa1,
    title: "Side table",
    path: "/"
  }
];

const Categories = () => {
  return (
  
  <div className="flex bg-Tertiary">
      {categoriesArray.map((category, index) => {
        const { image, title, path } = category;
        return (
          <CategoryCard key={index} src={image} title={title} path={path} />
          
        );
      })}
      </div>
  
  );
};

export default Categories;