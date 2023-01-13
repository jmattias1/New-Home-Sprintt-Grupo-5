import React from 'react'
import Categories from '../components/categories/Categories';
import Metrics from '../components/metricas/Metrics'
const Home = () => {
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">New Home Dashboard</h1>
      </div>
      <Metrics />

      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h5 className="m-0 font-weight-bold text-gray-800">
                Último producto agregado en base de datos.
              </h5>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "235px", heigth: "100px" }}
                  src="/images/product-c78b93f0-9355-11ed-916a-37acf262f43f.jpg"
                  alt="Ultimo producto"
                />
              </div>
              <b>Epiphone Inspired Gibson SG Special P-90</b>
              <p>
                Fabricada en caoba con acabado brillante. Con 6 cuerdas y 22
                trastes de tamaño medium jumbo. El largo de escala es de 24.72
                .El puente es fijo.Incluye 2 micrófonos simples.Controles de
                selector de micrófonos, tono y volumen.Sonidos fuertes y firmes
                con un estilo propio.,
              </p>
            </div>
          </div>
        </div>

        <Categories />
      </div>
    </div>
  );
}

export default Home
