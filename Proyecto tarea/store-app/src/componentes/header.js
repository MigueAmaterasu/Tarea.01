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
			       
		</ul>
		</nav>
		</header>	
	

	}
}
export default Header;