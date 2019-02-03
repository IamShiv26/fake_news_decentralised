import React, { Component } from 'react'
import web3 from './web3';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import {abi, address} from './contract';
import logo from './logo.png';

let contract;
export class Article extends Component {

  constructor(props) {
    super(props)
    this.checkVoteEnabled();
  }
  


	state = {
        message1 : '',
        isMetaMask: false,
        newsURL : '',
        voteEnabled:'',
        resultfake:'',
        resultnotfake:''
    };
	

    async componentDidMount() {

        if (typeof window.web3 !== 'undefined') {
            console.log('web3 is enabled');
            if (web3.currentProvider.isMetaMask === true) {
                await this.setState({isMetaMask: true});
                console.log('MetaMask is active');
            } else {
                console.log('MetaMask is not available')
            }
        } else {
            console.log('web3 is not found')
        }

        if (this.state.isMetaMask) {
            contract = new web3.eth.Contract(abi, address);
        }
        this.setState({newsURL:this.props.article.url });
    }

    startVote = async (event) => {
        event.preventDefault();
		const accounts = await web3.eth.getAccounts();
        this.setState({message1: 'Starting Vote....'});

        try {
        		await contract.methods.postQuery(this.state.newsURL).send({from : accounts[0]});
        } catch (err) {
            console.log(err);
        }
		
        this.setState({message1: 'Voting started!! '});
        this.setState({voteEnabled:false});
    };


   checkVoteEnabled = async (event) => {
		const accounts = await web3.eth.getAccounts();
		const val = contract.methods.validateVoteStart(this.state.newsURL).call();
		if(val){
			this.setState({voteEnabled:true});
		}
		else{
			this.setState({voteEnabled:false});
		}
    };


    castVoteFake = async (event) => {
        event.preventDefault();
		const accounts = await web3.eth.getAccounts();
        this.setState({message1: 'Casting Vote......'});

        try {
            	await contract.methods.voteFake(this.state.newsURL).send({from : accounts[0]});
        } catch (err) {
            console.log(err);
        }
        this.setState({message1: 'Vote successfully casted '});
    };
    
    castVoteTrue = async (event) => {
        event.preventDefault();
		const accounts = await web3.eth.getAccounts();
        this.setState({message1: 'Casting Vote......'});

        try {
            	await contract.methods.voteTrue(this.state.newsURL).send({from : accounts[0]});
        } catch (err) {
            console.log(err);
        }
        this.setState({message1: 'Vote successfully casted '});
    };

    viewCount1 = async (event) => {
        event.preventDefault();
		let counts;
        const accounts = await web3.eth.getAccounts();
		let notfake,fake;
        this.setState({message1: 'Waiting for confirmation..'});
        try {
            await contract.methods.transferAmount().send(
                {
                    from: accounts[0],
                    gas: '1000000',
                    value: web3.utils.toWei("0.3")
                }
            );
            notfake = await contract.methods.viewCountTrue(this.state.newsURL).call();
            fake = await contract.methods.viewCountFake(this.state.newsURL).call();
		//let notfakecount = counts[0];
		//let fakecount=counts[1];
            this.setState({ resultnotfake:notfake });
            this.setState({ resultfake:fake });
            console.log(this.state.resultnotfake,this.state.resultfake);
        } catch (err) {
            this.setState({message1: 'Error in result'});
        }
    };

  render() {
    console.log(this.props.article);
    return (
       
     
     <div> <nav className="navbar navbar-light bg-info">
     <a className="navbar-brand" href="#">
       
       <img src={logo} width="30" height="45" alt="" />
       <span style={{padding:'2em', color:'white', size:'2em'}}>NewsGlobal</span>
      
       </a>
      </nav>
     
     
     
     
      <div style={{padding:'6.5em 0em 0em 0em'}} className="container">
        <div className="row">
          <div className="col-md-8">
            <ul className="list-group-flush">
                <li className="list-group-item">
                  <h1>{ this.props.article.title }</h1>
                </li>
                <li className="list-group-item">
                  <small className="text-muted">Published At: { this.props.article.publishedAt }</small>
                </li>
                <li className="list-group-item">
                  <div>
                    <img className="responsive articleImg"
                      src={ this.props.article.urlToImage } />
                  </div>
                </li>
                <li className="list-group-item">
                    <h4>Content:</h4><br/>
                    <div><p>{ this.props.article.content }</p></div>
                </li>
                <li className="list-group-item">
                  <div>
                    <a href={ this.props.article.url } target="_blank">
                      <input type="button" class="btn btn-lg btn-block btn-outline-primary"
                                value="View the entire article"/>
                    </a>
                  </div>
                </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-group flush mt-2">
            <li className="list-group-item">
                    <Button bsSize="large" bsStyle="info" onClick={this.startVote}>Start Vote</Button>
                </li>
                <li className="list-group-item">
                    <Button bsSize="large" bsStyle="info"  onClick={this.castVoteFake}>Vote as Fake</Button>
                </li>
                <li className="list-group-item">
                    <Button bsSize="large" bsStyle="info" onClick={this.castVoteTrue}>Vote as Real</Button>
                </li>
                <li className="list-group-item">
                    <Button bsSize="large" bsStyle="info" onClick={this.viewCount1}>View Count</Button>
                </li>
                <li className="list-group-item">
                	<h2>truth count:{this.state.resultnotfake}</h2>
                	<h2>fake count:{this.state.resultfake}</h2>
                </li>
            </ul>
          </div>
        </div>
      </div>
   </div>
    );   
  }
}

export default Article