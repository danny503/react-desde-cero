import React from "react"

const cursos = [
    {
      "id": 1, 
      "title": "React desde cero",
      "img": "https://edteam-media.s3.amazonaws.com/courses/original/5eaaec0b-fa78-4f48-94b6-61b757e1f5fa.png",
      "price": 50,
      "profesor": "Danie Lopez"
    },
    {
      "id": 2,
      "title": "Vue desde cero",
      "img": "https://edteam-media.s3.amazonaws.com/courses/original/b393cce0-3ec8-4c61-877d-92e2e04f9120.png",
      "price": 30,
      "profesor": "Danie Lopez"
    },
    {
      "id": 3,
      "title": "Angular desde cero",
      "img": "https://edteam-media.s3.amazonaws.com/courses/original/9e7655f4-a855-4d30-a3e0-736fa47f479b.png",
      "price": 25,
      "profesor": "Jhonnie Lopez"
    },
    {
      "id": 4,
      "title": "Go desde cero",
      "img": "https://edteam-media.s3.amazonaws.com/courses/original/91e149d0-961a-4594-a8ff-0a625be9cdd2.png",
      "price": 10,
      "profesor": "Cris Lopez"
    }
  ]

const Course = ({match}) => {

    const  cursoActual = cursos.filter( c => c.id === parseInt(match.params.id))[0]

    return (
        <div className="ed-grid m-grid-3">
            {
                 cursoActual ? (
                     <>
                        <h1 className="m-cols-3">{cursoActual.title}</h1>
                        <img className="m-cols-1" src={cursoActual.img} alt={cursoActual.title}/>
                        <p className="m-cols-1">{cursoActual.profesor}</p>                         
                     </>
                 ) :
                    <h1>El curso no existe</h1>             
            } 
        </div>          
    )
}
export default Course