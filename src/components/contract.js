const abi = [
	{
		"constant": false,
		"inputs": [],
		"name": "transferAmount",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "text",
				"type": "string"
			}
		],
		"name": "viewCountFake",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "text",
				"type": "string"
			}
		],
		"name": "voteTrue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "text",
				"type": "string"
			}
		],
		"name": "voteFake",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "text",
				"type": "string"
			}
		],
		"name": "validateVoteStart",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "text",
				"type": "string"
			}
		],
		"name": "viewCountTrue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "text",
				"type": "string"
			}
		],
		"name": "postQuery",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const address = '0xa67c706912220d9aa2001870fa278bf5fc51fb12';

module.exports = {abi, address};