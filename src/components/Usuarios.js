import { Component } from 'react'
import axios from 'axios'

export default class Usuarios extends Component {

    state = {
        Usuarios: []
    }

    componentDidMount() {
        this.getUsers();
    }


    getUsers = async () => {
        const usuarios = await axios.get('http://localhost:4000/usuarios')
        this.setState({
            Usuarios: usuarios.data
        })
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.Usuarios.map(usuario => (
                        <ul>
                            <li>ID: {usuario.id}</li>
                            <li>Name: {usuario.name}</li>
                            <li>Surname: {usuario.surname}</li>
                        </ul>
                    ))
                }
            </div>
        );
    }

}
