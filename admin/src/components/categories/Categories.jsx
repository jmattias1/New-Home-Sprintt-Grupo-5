import React, { useState} from "react";
import Category from "./Category";
import {useEffect} from 'react'
import UseFetch from "../../hooks/UseFetch";
export const Categories = () => {
    const [state, setstate] = useState({
      loading: true,
      categories: [],
    });
    useEffect(() => {
      UseFetch("/categories").then(({ data }) => {
        setstate({
          loading: false,
          categories: data,
        });
      });
    }, []);
  return (
    <div class="col-lg-6 mb-4">
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h5 class="m-0 font-weight-bold text-gray-800">
            Genres in Data Base
          </h5>
        </div>
        <div class="card-body">
          <div class="row">
            {state.loading ? (
              <p>Cargando...</p>
            ) : (
              state.categories.map((category, index) => (
                <Category {...category} key={category.name + index} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
