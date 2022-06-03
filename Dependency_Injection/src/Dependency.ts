class Daddy {
  Money: Number;
  /**
   *
   */
  constructor(_money: Number) {
    this.Money = _money;
  }
  GiveMoney() {
    console.log("give money for you" + this.Money);
    return this.Money;
  }
}
// Explicit Dependency
class Son {
  Money: Daddy;
  constructor(_money: Daddy) {
    this.Money = _money;
  }
  ShowWallet() {
    console.log("Total money" + this.Money.GiveMoney);
  }
}
// Implicit Dependency
class Wife {
  GetFamilyFund() {
    const fundFamily = new Daddy(100000000000000);
  }
}
