import React, { useState, useEffect } from "react"
import axios from "axios"

const Course = ({match}) => {

  const [state, setState] = useState({ })
  const [comment, setComment] = useState("Sin comentarios")

  useEffect( () => {
    axios.get(`https://my-json-server.typicode.com/danny503/db-json/cursos/${match.params.id}`)
    .then(response => setState (response.data))
  }, [])

  const myComment = e => { 
    setComment(e.target.value)
  }

    return (
        <div className="ed-grid m-grid-3">
            {
                 state ? (
                     <div className="ed-grid">
                        <div className="l-block">
                          <h1 className="m-cols-3">{state.title}</h1>
                          <img className="m-cols-1" src={state.img} alt={state.title}/>
                          <p className="m-cols-1">{state.profesor}</p>    
                        </div> 
                        <div>
                          <h2>Escribe un comentario</h2>  
                          <input type="text" placeholder="Escribe" onChange={myComment.bind(this)} />
                          <p>{comment}</p>
                        </div>                      
                     </div>
                 ) :
                    <h1>El curso no existe</h1>             
            } 
        </div>          
    )
}
export default Course