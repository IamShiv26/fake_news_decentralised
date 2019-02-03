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
		"name": "viewCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
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
const address = '0x7bb7c62e259de3710f53a19790822bda6f5b787d';

module.exports = {abi, address};