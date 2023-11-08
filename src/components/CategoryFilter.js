import React, { useState } from "react";

function CategoryFilter({categories, selectedCategory, handleCategorySelect}) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return (
          <button 
          key={category}
          onClick={() => handleCategorySelect(category)}
          className={selectedCategory === category ? "selected" : ""}
          >{category}</button>
        )
      })}
    </div>
  );
}

export default CategoryFilter;
