// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract shiyan {
    // struct massages {
    //     string massage;
    // }
    
    struct people{
        string name;
        uint32 age;
        string idCard;
        string moreMes;
        
    }
    
    mapping(string => people) public people1;

    function massage2(string memory _name,uint32 _age,string memory _idCard,string memory _moreMes) public returns (bool) {
        people1[_name].name= _name;
        people1[_name].age = _age;
        people1[_name].idCard = _idCard;
        people1[_name].moreMes = _moreMes;
        return true;
    }
    function getmassage2(string memory _getName) public view returns (string memory,uint32,string memory,string memory) {
        return(
            people1[_getName].name,
            people1[_getName].age,
            people1[_getName].idCard,
            people1[_getName].moreMes
            );
    }
}