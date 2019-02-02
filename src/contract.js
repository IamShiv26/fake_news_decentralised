const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "text",
				"type": "uint8"
			}
		],
		"name": "postQuery",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
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
				"type": "uint8"
			}
		],
		"name": "voteFake",
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
				"type": "uint8"
			}
		],
		"name": "voteTrue",
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
				"type": "uint8"
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
	}
]
const address = '0x59ab07ceffeb6a40c74ff457cfcf82529187d2f1';

module.exports = {abi, address};