const Mung = artifacts.require("Mung");

module.exports = function(deployer){
	deployer.deploy(Mung, 'ian'); //생성자에 전달
}