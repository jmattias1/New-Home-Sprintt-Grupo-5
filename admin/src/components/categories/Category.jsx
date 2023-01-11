import React from "react";

export const Category = ({name}) => {
  return (
    <div class="col-lg-6 mb-4">
      <div class="card bg-dark text-white shadow">
        <div class="card-body">{name}</div>
      </div>
    </div>
  );
};
export default Category;
