import React, { Component } from 'react'
import axios from 'axios'

export default class Main extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
        this.getUsers();
    }


    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/usuario')
        this.setState({
            users: res.data
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (
                        <ul>
                            <li>ID: {user.id}</li>
                            <li>Name: {user.name}</li>
                            <li>Surname: {user.surname}</li>
                        </ul>
                    ))
                }
            </div>
        );
    }

}
