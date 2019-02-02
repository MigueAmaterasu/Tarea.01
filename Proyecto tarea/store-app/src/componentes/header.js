import React, {Component}from 'react';
//import AddFruit from './componentes/AddFruit';


class Header extends Component {

	
ocultar(){
this.setState({
  showMe:false
})
}

mostrar(){
this.setState({
  showMe:true
})
}
	render(){
			return <header className='Header'>

			<nav>
		<ul className="navBarContainer">
			<li className="navBarItem ">
				<a href="#perfil">Perfil</a>
			</li>
			<li className="navBarItem active">
				<a href="#home">Proteco store</a>
			</li>
			{
          this.state.showMe?
        
        <AddFruit
        agregar={this.onSubmit}/>
        :null
        }
        <button onClick={()=>this.ocultar()}>Ocultar menu</button>
        <button onClick={()=>this.mostrar()}>Mostrar menu</button>
		</ul>
		</nav>
		</header>	
	

	}
}
export default Header;