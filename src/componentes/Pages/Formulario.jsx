import React, {Component} from "react"

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: "",
            correo: "",
            fecha: new Date()
        }
        this.cambiarNombre = this.cambiarNombre.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
        this.cambiarCorreo = this.cambiarCorreo.bind(this)
    }

    cambiarNombre(e) {
        this.setState({ nombre: e.target.value })
    }

    cambiarCorreo(e) {
        this.setState({ correo: e.target.value })
    }
    //this.setState({})
    render() {
        return (
           <div className="ed-grid">
               <h1>Formulario</h1>
               <form>
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            <input type="text" 
                            onChange={ this.cambiarNombre } 
                            />                       
                        </div>
                        <div className="form__item">
                            <label>E-mail</label>
                            <input type="email"
                            onChange={ this.cambiarCorreo }
                            />                       
                        </div>                        
                   </div>
               </form>
               <div>
                   <h2>{`Hola ${this.state.nombre}`}</h2>
                   <span> {`De correo ${this.state.correo}`} </span>
               </div>
            </div> 
        )
    }
}
export default Formulario