import React, { useState } from "react";
import { useEffect } from "react";
import UseFetch from "../../hooks/UseFetch";
import Metric from "./Metric";

const Metrics = () => {
  const [state, setstate] = useState({
    products: {
      title: "Total Productos",
      icon: "fa-box archive",
      value: 0,
      color: "primary",
    },
    users: {
      title: "Usuarios registrados",
      icon: "fa-users",
      value: 0,
      color: "success",
    },
    categories: {
      title: "Categorias",
      icon: "fa-folder",
      value: 0,
      color: "warning",
    },
  });
  useEffect(() => {
    UseFetch("/totals").then(({ data }) => {
      setstate({
        products: {
          ...state.products,
          value: data.totalProducts,
        },
        users: {
          ...state.users,
          value: data.totalUsers,
        },
        categories: {
          ...state.categories,
          value: data.totalCategories,
        },
      });
    });
  });

  return (
    <div class="row">
      <Metric {...state.products} />
      <Metric {...state.users} />
      <Metric {...state.categories} />
    </div>
  );
};

export default Metrics;
