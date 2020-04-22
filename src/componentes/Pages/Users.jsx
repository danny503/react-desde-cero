import React, {Component} from "react"
import UserCard from "../Molecules/UserCard"
import axios from "axios"
import UsersGrid from "../Organisms/UsersGrid"


class Users extends Component{

    constructor(props){
        super(props)

        this.state = {
            users: []
        }
    }
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
    //     .then( respuesta => respuesta.json() )
    //     .then( respuesta2 => {
    //         this.setState({
    //             users: respuesta2
    //         })
    //     })
    // }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            this.setState({
                users: response.data
            })
        })
    }

    // componentDidMount() {
    //     axios.get('https://my-json-server.typicode.com/danny503/practica-api/alumnos')
    //     .then(response => {
    //         this.setState({
    //             alumnos: response.data
    //         })
    //     })
    // }

    render() {
        const {users} = this.state
        return <UsersGrid users={users}/>
        
    }
}

export default Users

