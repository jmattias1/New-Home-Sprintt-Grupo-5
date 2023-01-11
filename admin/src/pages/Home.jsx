import React from 'react'
import Categories from '../components/categories/Categories';
import Metrics from '../components/metricas/Metrics'
const Home = () => {
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">New Home Dashboard</h1>
      </div>
      <Metrics/>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h5 class="m-0 font-weight-bold text-gray-800">
                Last movie in Data Base
              </h5>
            </div>
            <div class="card-body">
              <div class="text-center">
                <img
                  class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "40rem" }}
                  src="assets/images/mandalorian.jpg"
                  alt=" Star Wars - Mandalorian "
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, consequatur explicabo officia inventore libero
                veritatis iure voluptate reiciendis a magnam, vitae, aperiam
                voluptatum non corporis quae dolorem culpa citationem ratione
                aperiam voluptatum non corporis ratione aperiam voluptatum quae
                dolorem culpa ratione aperiam voluptatum?
              </p>
              <a class="btn btn-danger" target="_blank" rel="nofollow" href="/">
                View movie detail
              </a>
            </div>
          </div>
        </div>

<Categories/>
      </div>
    </div>
  );
}

export default Home
