import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


//Components
import Header from './componentes/header.js';
import Home from './componentes/Home/Home.js';
import AddFruit from './componentes/AddFruit';




class App extends Component {
  
  constructor(props){
    
    super(props);
    this.state={
      titulo: "Mis frutitas"
    }
  
}
ocultar(newState){
  this.setState({
showMe:false
})
}

mostrar(newState){
this.setState({
  showMe:true
})
}

  onSubmit=(fruit)=>{
    axios.post('http://localhost:8080/api/fruta',fruit)
      .then(res=> console.log(res.data))

  }
 
  render() {
    return (
      <div className="App">
        <Header />
        
        {
          this.state.showMe?
        
        <AddFruit
        agregar={this.onSubmit}/>
        :null
        }
 <button onClick={()=>this.ocultar()}>Ocultar menu</button>
              <button onClick={()=>this.mostrar()}>Mostrar menu</button>
        <main>
        <h2>{this.state.titulo}</h2>
          <Home/>
          </main>
      </div>

            );
            }
          }
                          

export default App;
