console.log("ERC720")

let accounts = [];

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

console.log("isMetaMask：" + ethereum.isMetaMask)

$(".enableEthereumButton").click(function () {
  
    getAccount()

}
)




async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    $(".showAccount").html(account);
}


ethereum.on('accountsChanged', function (accounts) {
	console.log("accountsChanged");
	getAccount()
});

ethereum.on('chainChanged', (chainId) => {
	console.log("chainId", chainId);

});


let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
console.log("web3", web3)


                                     // yzm.sol
var contractAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "a1",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "phoneNum1",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "peopName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "message4",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_mesName",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_mesAge",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "_idCard",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_lookLike",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_homeAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_more",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_famPhone",
				"type": "uint32"
			}
		],
		"name": "addMessage",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_getName",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_peoPhone",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "message2",
				"type": "string"
			}
		],
		"name": "addMoreMes",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_age",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "_peoType",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "_phoneNum",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "_homeAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_password",
				"type": "string"
			}
		],
		"name": "addPeople",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_getName",
				"type": "string"
			}
		],
		"name": "getMessage",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_getName",
				"type": "string"
			}
		],
		"name": "getMoreMes",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "_phoneNum",
				"type": "uint32"
			}
		],
		"name": "getPeople",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			},
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "messages",
		"outputs": [
			{
				"internalType": "string",
				"name": "mesName",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "mesAge",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "idCard",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "lookLike",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "homeAddress",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "more",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "famPhone",
				"type": "uint32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint32",
				"name": "",
				"type": "uint32"
			}
		],
		"name": "people1",
		"outputs": [
			{
				"internalType": "string",
				"name": "peoName",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "peoAge",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "peoType",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "phoneNum",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "homeAddr",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "password",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_password",
				"type": "address"
			},
			{
				"internalType": "uint32",
				"name": "_phoneNum",
				"type": "uint32"
			}
		],
		"name": "vertifyAccounts",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var contract = new web3.eth.Contract(contractAbi, "0x9611267eB63c608a899f93e52C1b8e4A53aBC927");

console.log("contract", contract)


$("#13").click(function(){
	alert("success");
	var account = accounts[0];
	console.log("提交信息中。。");
    let _name = $("#1").val();
	let _age = $("#2").val();
	let _peoType = $("#3").val();
	let _phoneNum = $("#4").val();
	let _homeAddr= $("#5").val();
	let _password = $("#6").val();
	contract.methods.addPeople(_name, _age, _peoType, _phoneNum, _homeAddr, _password).send({ from: account }).then(
		function (result) {
			console.log("result", result);
			if (result.status) {
				alert("添加成功")
			} else {
				alert("添加失败")
			}
		}
	)
})


$("#summitMe").click(function () {
	console.log("查询信息中。。");
	let _mesName = $("#7").val();
	let _mesAge = $("#8").val();
	let _idCard = $("#9").val();
	let _lookLike = $("#10").val();
	let _homeAddress = $("#11").val();
	let _more = $("#12").val();
	let _famPhone = $("#113").val();


	contract.methods.addMessage(_mesName, _mesAge, _idCard, _lookLike, _homeAddress, _more, _famPhone).send({ from: accounts[0] }).then(
		function (result) {
			console.log("result", result);
alert("success");
		}
	)
})


$("#22").click(function () {
	alert("success");
	var account = accounts[0];
	console.log("提交信息中。。");
	let _name = $("#21").val();

	contract.methods.getMessage(_name).call({ from: account }).then(
		function (result) {
			console.log("result", result);
			
			$("#24").html(result[0]);
			$("#25").html(result[1]);
			$("#26").html(result[2]);
			$("#27").html(result[3]);
			$("#28").html(result[3]);
			$("#29").html(result[3]);
			$("#30").html(result[3]);
		}
	)
})
$("#15").click(function () {
	alert("success");
	var account = accounts[0];
	console.log("提交信息中。。");;
	let _phoneNum = $("#14").val();

	contract.methods.getPeople(_phoneNum).call({ from: account }).then(
		function (result) {
			console.log("result", result);
			$("#17").html(result[0]);
			$("#18").html(result[1]);
			$("#19").html(result[2]);
			$("#00").html(result[3]);
		}
	)
})

$("#button2").click(function () {
	alert("success");
	var account = accounts[0];
	console.log("提交信息中。。");
	let _getName = $("#31").val();
	let _peoPhone = $("#32").val();
	let message2 = $("#33").val();


	contract.methods.addMoreMes(_getName, _peoPhone, message2).send({ from: account }).then(
		function (result) {
			console.log("result", result);
			if (result.status) {
				alert("添加成功")
			} else {
				alert("添加失败")
			}
		}
	)
})
$("#35").click(function () {
	alert("success");
	var account = accounts[0];
	console.log("提交信息中。。");
	let _getName = $("#34").val();

	contract.methods.getMoreMes(_getName).call({ from: account }).then(
		function (result) {
			console.log("result", result);
			$("#38").html(result[0]);
			$("#lostmessage3").html(result[1]);
			$("#losttime2").html(result[2]);
			$("#namen").html(result[3]);
		}
	)
})