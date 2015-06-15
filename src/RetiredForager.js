var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'gray';
};

RetiredForagerBee.prototype.eat = function () {
  Grub.prototype.eat.call(this);
}

RetiredForagerBee.prototype.gamble = function (treasure) {
  this.treasureChest.push(treasure);
}
