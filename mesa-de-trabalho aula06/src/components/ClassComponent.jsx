import { Compontent } from "react";
import App from "../styles/App.css";

export default class App extends Component {

    constructor() {

        super()
        this.state = {
            listaDeComrpras: [{
                id: 0,
                nome: "abacaxi",
                url:"https://superprix.vteximg.com.br/arquivos/ids/175201-292-292/Abacaxi--unidade-.png?v=636294199507870000"
            },
            {
                id: 1,
                nome: "banana",
                url:"https://saborizatti.com.br/wp-content/uploads/2020/12/Banana-Prata-Saborizatti.png" 
            }]

        }


    }
    render (){
        const lista = () => {
            this.setState({listaDeComrpras : this})
        } 
    }

}
