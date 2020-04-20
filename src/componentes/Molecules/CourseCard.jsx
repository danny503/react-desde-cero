import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//const mayorEdad = edad => edad > 18
//const persona = {"nombre": "Daniel", "Apellido": "Lopez", "edad": 20}
const CourseCard = ({id,title, img, price, profesor}) => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <Link to={`cursos/${id}`}>
        <img src={img}  alt={title} />
      </Link>      
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className="center"> {title} </h3>    
        <div className="s-main-center">
          { `Prof.: ${profesor}` }
        </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="https://google.com"> {`$ ${price} USD`} </a>
      </div>
    </div>
    </article>
)
CourseCard.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string

}
CourseCard.defaultProps = {
  title: "No se encontró titulo",
  img: "https://reportedigital.com/wp-content/uploads/2019/03/tipos-de-almacenamiento-en-la-nube.jpg",
  price: "--",
  profesor: ""
}

export default CourseCard
