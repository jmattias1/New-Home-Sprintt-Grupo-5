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
              <b>Iphone 13 pro max</b>
              <p style={{ fontSize:"12px" }}>
                iPhone 13 Pro Max. El mayor avance en el sistema de cámaras Pro
                hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda
                una respuesta más rápida y fluida. Chip A15 Bionic para un
                rendimiento fuera de serie. Diseño resistente y la mayor
                duración de batería jamás vista en un iPhone.1 Avisos Legales
                (1)La duración de la batería varía según el uso y la
                configuración. (2)La pantalla tiene esquinas redondeadas que
                siguen el elegante diseño curvo del teléfono, y las esquinas se
                encuentran dentro de un rectángulo estándar. Si se mide en forma
                de rectángulo estándar, la pantalla tiene 6.68 pulgadas en
                diagonal. El área real de visualización es menor. (3)Disponible
                más adelante en 2021. (4)El iPhone 13 Pro Max es resistente a
                los derrames, a las salpicaduras y al polvo, y fue probado en
                condiciones de laboratorio controladas, con una clasificación
                IP68 según la norma IEC 60529. La resistencia a los derrames, a
                las salpicaduras y al polvo no es una condición permanente, y
                podría disminuir como consecuencia del uso normal. No intentes
                cargar un iPhone mojado; consulta el manual del usuario para ver
                las instrucciones de limpieza y secado. La garantía no cubre
                daños producidos por líquidos. (5)Algunas funcionalidades
                podrían no estar disponibles en todos los países o áreas. (6)Los
                accesorios se venden por separado
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
