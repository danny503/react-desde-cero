import React, { useState } from "react"
import useCourse from "../CustomHooks/useCourse"

const Course = ({match}) => {

  const course = useCourse(match.params.id) 
  const [comment, setComment] = useState("Sin comentarios")


  const myComment = e => { 
    setComment(e.target.value)
  }

    return (
        <div className="ed-grid m-grid-3">
            {
                 course ? (
                     <div className="ed-grid">
                        <div className="l-block">
                          <h1 className="m-cols-3">{course.title}</h1>
                          <img className="m-cols-1" src={course.img} alt={course.title}/>
                          <p className="m-cols-1">{course.profesor}</p>    
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