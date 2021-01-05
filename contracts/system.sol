// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract shiyan {
    // struct massages {
    //     string massage;
    // }
    
    //个人信息
    struct people{
        string peoName;
        uint32 peoAge;
        string peoType;
        uint32 phoneNum;
        string homeAddr;
        string password;
    }
    
    mapping(uint32 => people) public people1; //电话号码
    
    //失踪人基本信息
    struct message{
        string mesName;
        uint32 mesAge;
        string idCard;
        string lookLike;
        string homeAddress;
        uint256 timestamp;
        string more;
        uint32 famPhone;
        
    }
    
    //搜寻信息
    struct a{
        string name;
        uint32 phoneNum1;
        string peopName;
        uint256 timestamp;
        string message4;
    }
    
    mapping(string => a) public a1; //姓名
    
    mapping(string => message) public messages;  //姓名
    
    //注册账户
    function addPeople(
            string memory _name,
            uint32 _age,
            string memory _peoType,
            uint32 _phoneNum,
            string memory _homeAddr,
            string memory _password) public returns (bool) {
            people1[_phoneNum].peoName= _name;
            people1[_phoneNum].peoAge = _age;
            people1[_phoneNum].peoType = _peoType;
            people1[_phoneNum].phoneNum = _phoneNum;
            people1[_phoneNum].homeAddr = _homeAddr;
            people1[_phoneNum].password = _password;
            return true;
    }
    
    //添加失踪人基本信息
    function addMessage(
            string memory _mesName,
            uint32 _mesAge,
            string memory _idCard,
            string memory _lookLike,
            string memory _homeAddress,
            string memory _more,
              uint32 _famPhone) public returns(bool){
          messages[_mesName].mesName = _mesName;
          messages[_mesName].mesAge = _mesAge;
          messages[_mesName].idCard = _idCard;
          messages[_mesName].lookLike = _lookLike;
          messages[_mesName].timestamp = uint32(block.timestamp);
          messages[_mesName].more = _more;
          messages[_mesName].famPhone = _famPhone;
          
          return true;
        }
    
    //得到个人信息
    function getPeople(uint32 _phoneNum) public view returns (string memory,uint32,uint32,string memory) {
        return(
            people1[_phoneNum].peoName,
            people1[_phoneNum].peoAge,
            people1[_phoneNum].phoneNum,
            people1[_phoneNum].homeAddr
            );
    }
    
    //得到失踪人基本信息
    function getMessage(string memory _getName) public view returns (string memory,uint32, string memory,string memory,uint256,string memory,uint32) {
        return(
            messages[_getName].mesName, 
            messages[_getName].mesAge ,
            messages[_getName].idCard ,
            messages[_getName].lookLike ,
            messages[_getName].timestamp,
            messages[_getName].more,
            messages[_getName].famPhone
            );
    }
    
    //添加搜寻信息
    function addMoreMes(string memory _getName,
    uint32 _peoPhone,
    string memory message2) public returns(bool){
        a1[_getName].peopName=  people1[_peoPhone].peoName;
        a1[_getName].phoneNum1=  _peoPhone;
        a1[_getName].message4= message2;
        a1[_getName].timestamp = uint32(block.timestamp);
        a1[_getName].name = _getName;
        return true;
    }
    
    //得到搜寻信息
    function getMoreMes(string memory _getName) public view returns(
        string memory,
        uint32,
        string memory,
        uint256,
        string memory){
            return(
                a1[_getName].peopName,
        a1[_getName].phoneNum1,
        a1[_getName].message4,
        a1[_getName].timestamp ,
        a1[_getName].name );
        

    }
    
    //登入注册验证
    function vertifyAccounts(address _password,uint32 _phoneNum) public view returns(bool){
                if(keccak256(abi.encodePacked(people1[_phoneNum].password))==keccak256(abi.encodePacked(_password))){
                    return(true);
                }
        return(false);
    }
    
}