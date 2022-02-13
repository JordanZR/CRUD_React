import axios from 'axios'

function PostUsuarios(){
      const user = {
            name: "Probando",
            surname: "´Probando2"
      }
      axios.post('http://localhost:4000/usuarios', user)
      console.log('Usuario posteado')
}
export default PostUsuarios
