import React, { Component } from 'react'
import App from './App';
import logo from './logo.png';

class FrontPage extends Component {
	state = {
		home:true,
		value: ''
	};
	
	changePage = () =>	{
		this.setState({home:false});
	}	
	
	handleData = (event) =>{
		this.setState({value: event.target.value});
	}

	renderhome() {
	
    return (
	
    <div className="App photo">                    
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<ul className="list-group list-group-flush d-flex align-items-center mx-auto marginalign">
							<li className="list-group-item fpli align-contents-left">
								<h1 id="fph1" className="colorwhite">
									<img className="imgwidth" src={ logo } alt="" /> {'\u00A0'}NewsGlobal
								</h1>
							</li>
							<li className="list-group-item fpli">
								<h4 className="colorwhite">Stay updated with the present-day news and help us detect the fake news circulated online.</h4>
							</li>
							<li className="list-group-item fpli">
								<div id="searchinput">
									<div className="input-group col-md-12">               
										<form onSubmit={this.handleData}>
											<div className="input-group searchbar">
												<input type="text"  value={this.state.value} onChange={this.handleData} className="form-control" placeholder="Search for your daily dose of news" />
												<div className="input-group-append">
													<button className="btn btn-secondary" type="submit" onClick={this.changePage}>
														<i className="fa fa-search"></i>
													</button>
												</div>
											</div>
										</form>					 					 
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
    </div>
    );
  }
  


	renderalt(){
		return(
				<div className="App">
					<App value={this.state.value} />
				</div>
		);  		
	}
	render() {
		if(this.state.home) {
			return this.renderhome();
		}
		else {
			return this.renderalt();
		}
	}
}

export default FrontPage;
