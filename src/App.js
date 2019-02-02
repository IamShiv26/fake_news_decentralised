import React, {Component} from 'react';
import './App.css';
import web3 from './web3';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Form from 'react-bootstrap/lib/Form';
import FormControl from 'react-bootstrap/lib/FormControl';
import {abi, address} from './contract';

let contract;
class App extends Component {

    state = {
        message1 : '',
        isMetaMask: false,
        phaseName : ''
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
    }

    startVote = async (event) => {
        event.preventDefault();
		const accounts = await web3.eth.getAccounts();
        this.setState({message1: 'Starting Vote....'});

        try {
        		await contract.methods.postQuery(1).send({from : accounts[0]});
        } catch (err) {
            console.log(err);
        }
		
        this.setState({message1: 'Voting started!! '});
    };

    castVoteFake = async (event) => {
        event.preventDefault();
		const accounts = await web3.eth.getAccounts();
        this.setState({message1: 'Casting Vote......'});

        try {
            	await contract.methods.voteFake(1).send({from : accounts[0]});
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
            	await contract.methods.voteTrue(1).send({from : accounts[0]});
        } catch (err) {
            console.log(err);
        }
        this.setState({message1: 'Vote successfully casted '});
    };

    viewCount1 = async (event) => {
        event.preventDefault();
		let counts;
        const accounts = await web3.eth.getAccounts();
		
        this.setState({message1: 'Waiting for confirmation..'});
        try {
            await contract.methods.transferAmount().send(
                {
                    from: accounts[0],
                    gas: '1000000',
                    value: web3.utils.toWei(this.state.phaseName)
                }
            );
            
        counts = contract.methods.viewCount(1).call();
		//let notfakecount = counts[0];
		//let fakecount=counts[1];
            this.setState({message1: 'Not fake count : ' + counts});
            console.log(counts);
        } catch (err) {
            this.setState({message1: 'Error in result'});
        }
        this.setState({
            //clear state
        });
    };

    render() {

        if (this.state.isMetaMask) {
            return (
                <div className="App">
                    <div className="Border">
                        <h2>News Global</h2>

                        <h2 className="display-1 text-muted">{this.state.message1}</h2>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.startVote}>Start Vote</Button>

                        <br/><br/>

                        <hr width="100"/>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.castVoteFake}>Vote as Fake</Button>

                        <br/><br/>

                        <hr width="100"/>

                        <hr width="100"/>

                        <br/>
                        <hr width="100"/>

                        <Button bsSize="large" bsStyle="info" onClick={this.castVoteTrue}>Vote as Real</Button>

                        <br/><br/>

                        <hr width="100"/>

                        <br/>
                        <hr width="100"/>
                        
                        <Form inline onSubmit={this.viewCount1}>
                            <FormGroup>
                                <FormControl
                                    type="text"
                                    name="phaseName"
                                    placeholder="enter"
                                    value={this.state.phaseName}
                                    onChange={event => this.setState({phaseName: event.target.value})}/>
                                </FormGroup>
                                <br/><br/>
                            <FormGroup>
                                <Button bsSize="large" bsStyle="warning" type="submit">
                                    View Count
                                </Button>
                            </FormGroup>
                        </Form>

                        <br/><br/>

                        <hr width="100"/>


                    </div>

                    <br/><br/>

                </div>
            );
        } else {
            return (
                <div className="App">
                    <h2>You are using a decentralized application, for which you need metamask</h2>
                    <br/><br/><br/><br/><br/>
                    <a href="https://metamask.io">
                        <img src="download-metamask-dark.png"></img>
                    </a>
                </div>
            );
        }
    }
}

export default App;
