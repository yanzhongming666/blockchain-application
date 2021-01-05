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
				"name": "_getName",
				"type": "string"
			}
		],
		"name": "getmassage2",
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
			}
		],
		"stateMutability": "view",
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
				"name": "_idCard",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_moreMes",
				"type": "string"
			}
		],
		"name": "massage2",
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
				"name": "",
				"type": "string"
			}
		],
		"name": "people1",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint32",
				"name": "age",
				"type": "uint32"
			},
			{
				"internalType": "string",
				"name": "idCard",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "moreMes",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

var contract = new web3.eth.Contract(contractAbi, "0xA381A9a9B7406Dbf0275F53bf9381dAFDd942E13");

console.log("contract", contract)


$("#summitMe").click(function(){
	alert("success");
	var account = accounts[0];
	console.log("提交信息中。。");
	let _name = $("#name").val();
	let _age = $("#age").val();
	let _id = $("#idC").val();
	let _more = $("#more").val();

	contract.methods.massage2(_name, _age, _id, _more).send({ from: account }).then(
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


$("#foundMess").click(function () {
	console.log("查询信息中。。");
	let _nameFo = $("#nameFo").val();

	contract.methods.getmassage2(_nameFo).call({ from: accounts[0] }).then(
		function (result) {
			console.log("result", result);
			$("#foName").html(result[0]);
			$("#foAge").html(result[1]);
			$("#foId").html(result[2]);
			$("#foMore").html(result[3]);
		}
	)
})

