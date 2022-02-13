import { Component } from 'react'
import axios from "axios";

import PostUsuarios from "./PostUsuarios";
import Usuarios from "./Usuarios";

export default class Form extends Component{
    state = {
        Usuarios: [],
        name:'',
        surname: '',
        id: ''
    }

    async componentDidMount() {
        this.getUsuarios()
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value});
    }

    getUsuarios = async () => {
        const usuarios = await axios.get('http://localhost:4000/usuarios')
        this.setState({
            Usuarios: usuarios.data
        })
    }

    addUsuarios = async () => {
        if(this.state.id === ''){
            await axios.post('http://localhost:4000/usuarios',
                {
                    surname: this.state.surname,
                    name: this.state.name
                })
        }else{
            await axios.put('http://localhost:4000/usuarios',
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    id: this.state.id
                })
        }
        this.setState({
            name: '',
            surname: '',
            id: ''
        })
        this.getUsuarios()
    }

    deleteUsuarios = async (id) =>{
        await axios.delete('http://localhost:4000/usuarios',
            {
                data:{
                        id: id
                }
            })
        this.getUsuarios()
    }

    copyUsuarios = (id, name, surname)=>{
        this.setState({
            name: name, id: id, surname: surname
        })
    }

    render(){
        return(
            <div>
                <form>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" value={this.state.name} name={"name"} onChange={this.handleChange} aria-describedby="Name"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="surname" className="form-label">Surname</label>
                            <input type="text" className="form-control" value={this.state.surname} onChange={this.handleChange} name="surname" aria-describedby="Surname"/>
                        </div>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-success" onClick={this.addUsuarios}>Add</button>
                    </div>
                </form>
                <div className={"container"}>
                    <table className="table table-bordered">
                        <tbody>
                {
                    this.state.Usuarios.map(usuario => (
                            <tr>
                                <td>{usuario.id}</td>
                                <td>{usuario.name}</td>
                                <td>{usuario.surname}</td>
                                <td><button type="button" onClick={()=>this.deleteUsuarios(usuario.id)} className="btn btn-danger">Delete</button></td>
                                <td><button type="button" onClick={()=>this.copyUsuarios(usuario.id, usuario.name, usuario.surname)} className="btn btn-warning">Update</button></td>
                            </tr>
                    ))
                }
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}
