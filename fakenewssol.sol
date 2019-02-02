pragma solidity ^0.5.0;

contract Fakenews{
    uint amount;
    
    struct votes{
        uint8 notfake;
        uint8 fake;
        bool validate;
    }
    
    mapping(uint8 => votes) votestatus;
    mapping(address => uint) voteflag;
    mapping(address => uint) voteCount;
    

    function postQuery(uint8 text) public{
        require(votestatus[text].validate == false);
        votestatus[text].notfake=0;
        votestatus[text].fake=0;
        votestatus[text].validate = true;
    }
    
    function voteFake(uint8 text) public{
        require(voteflag[msg.sender] != text);
        votestatus[text].fake += 1;
        voteflag[msg.sender] = text;
        voteCount[msg.sender] += 1;
        if(voteCount[msg.sender] >= 5){
            getIncentive();
        }
    }

    
    function voteTrue(uint8 text) public{
        require(voteflag[msg.sender] != text);
        votestatus[text].notfake += 1;
        voteflag[msg.sender] = text;
        voteCount[msg.sender] += 1;
        if(voteCount[msg.sender] >= 5){
            getIncentive();
        }
    }
    
    function getIncentive() private{
        msg.sender.transfer(0.05 ether);
    }
    
    function transferAmount() public payable{
        amount = msg.value;
    }
    
    function viewCount(uint8 text) public view returns(uint,uint){
        require(amount == 0.1 ether);
        return(votestatus[text].notfake, votestatus[text].fake);
    }
}
