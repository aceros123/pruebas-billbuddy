import React,{useState} from "react";
function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit =  async (e) => {
        e.preventDefault();

        try{
            const response =  await fetch('http://127.0.0.1:8080/auth/login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Error en la solicitud', response.status);
              }
          
              const jsonData = await response.json();
              console.log(jsonData);
        }
        catch(error){
            console.log('se genero un error en fetch', error);
        }
    };
    return (
        <div>
            <h1>Authenticación en la API</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Ingrese su usuario" />
                <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Ingrese su contraseña" />
                <button type="submit" class="btn btn-success">Ingresar</button>
            </form>
        </div>
    )

}
 export default App;