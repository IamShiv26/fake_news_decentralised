pragma solidity ^0.5.0;

contract Fakenews{
    uint amount;
    
    struct votes{
        uint8 notfake;
        uint8 fake;
        bool validate;
    }
    
    mapping(string => votes) votestatus;
    mapping(address => string) voteflag;
    mapping(address => uint) voteCount;
    
    function validateVoteStart(string memory text) public view returns(bool){
        return votestatus[text].validate;
    }

    function postQuery(string memory text) public{
        require(votestatus[text].validate == false);
        votestatus[text].notfake=0;
        votestatus[text].fake=0;
        votestatus[text].validate = true;
    }
    
    function stringsEqual(string storage _a, string memory _b) internal view returns (bool) {
bytes storage a = bytes(_a);
bytes memory b = bytes(_b);
if (a.length != b.length)
return false;
// @todo unroll this loop
for (uint i = 0; i < a.length; i ++)
if (a[i] != b[i])
return false;
return true;
}
    
    function voteFake(string memory text) public{
        require(!stringsEqual(voteflag[msg.sender],text));
        votestatus[text].fake += 1;
        voteflag[msg.sender] = text;
        voteCount[msg.sender] += 1;
        if(voteCount[msg.sender] >= 5){
            getIncentive();
        }
    }

    
    function voteTrue(string memory text) public{
        require(!stringsEqual(voteflag[msg.sender],text));
        votestatus[text].notfake += 1;
        voteflag[msg.sender] = text;
        voteCount[msg.sender] += 1;
        if(voteCount[msg.sender] % 5 == 0){
            getIncentive();
        }
    }
    
    function getIncentive() private{
        msg.sender.transfer(0.1 ether);
    }
    
    function transferAmount() public payable{
        amount = msg.value;
    }
    
    function viewCountTrue(string memory text) public view returns(uint){
        require(amount == 0.3 ether);
        return votestatus[text].notfake ;
    }
    
    function viewCountFake(string memory text) public view returns(uint){
        require(amount == 0.3 ether);
        return votestatus[text].fake ;
    }
}