import React from 'react';
import "./styles/style.scss";
import Card from './componentes/Card'

const App = () => (
  <>
    <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://image.shutterstock.com/image-photo/laptop-blank-screen-on-table-260nw-340152863.jpg" alt="banner" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">Título del banner</p>
          <p> Subtítulo del banner</p>
          <a href="https://ed.team" className="button">Botón del banner</a>
        </div>
      </div>
    </div>
  </div>

  <div className="ed-grid m-grid-3">
    <Card 
      title="React desde cero"
      img="https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png"  
      price="50 usd"
      profesor="Daniel Lopez"
      />    
    
    <Card 
      title="Vue desde cero"
      img="https://edteam-media.s3.amazonaws.com/courses/original/b393cce0-3ec8-4c61-877d-92e2e04f9120.png"  
      price="30 usd"
      profesor="Cristian Lopez"
      />
  </div>
</>
)

export default App;

//Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un solo elemento
// 3: Apoyarse de los Fragment cuando necesito devolver 2 elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: class => className
// 7: for => htmlFor
