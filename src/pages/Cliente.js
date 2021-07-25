import './global.css'
import NavBar from '../components/Nav/NavBar'
import Footer from "../components/Nav/Footer";
import CadastroImg from '../images/cadastro.png'



function App() {

    class Cliente {
        constructor(name, email, cpf, cep) {
            this.name = name
            this.email = email
            this.cpf = cpf
            this.cep = cep
        }

        ValidarData() {
            for (let i in this) {
                if (this[i] === undefined || this[i] === '' || this[i] === null ) {
                    return false
                }
            }
            return true
        }
    }

    class Data {
        constructor() {
            let id = localStorage.getItem('id')

            if (id === null) {
                localStorage.setItem('id', 0)

            }
        }

        GetProximoId() {
            let proximoId = localStorage.getItem('id')
            return parseInt(proximoId) + 1

        }

        Gravar(d) {
            let id = this.GetProximoId()

            localStorage.setItem(id, JSON.stringify(d))

            localStorage.setItem('id', id)
        }

    }

    let data = new Data()

    function CadastrarCliente() {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let cpf = document.getElementById('cpf');
        let cep = document.getElementById('cep');


        let cliente = new Cliente(
            name.value,
            email.value,
            cpf.value,
            cep.value
        )
        
        
        
        if (cliente.ValidarData()) {
            data.Gravar(cliente)
            

            alert('Cliente cadastrado com Sucesso!')

        } else {
            alert('Cliente não Cadastrado! Por favor verifique os campos e tente novamente!')
        }
    }
    
   


    return (
        
        <div>
            <NavBar/>
                <div className="Container">
                    <img className="ImgCliente" src={CadastroImg} width="250" />
                    </div>
                <div className="Container">
                    
                    <form onSubmit={CadastrarCliente}>
                        <label>
                            Nome:
                            <input id="name" />
                        </label>
                        <label>
                            E-mail:
                            <input id="email" />
                        </label>
                        <label>
                            CPF:
                            <input id="cpf" />
                        </label>
                        <label>
                            CEP:
                            <input id="cep" />
                        </label>
                        <button type="submit" className="Btn">Enviar</button>
                    </form>
                    <div className="Risco"></div>
                </div>
            <Footer />
            </div>
            
    
        
    );
}

export default App;
