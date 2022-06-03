"use strict";
class Father {
    /**
     *
     */
    constructor(_money) {
        this.Money = _money;
    }
    GiveMoney() {
        console.log("give money for you" + this.Money);
        return this.Money;
    }
}
// Explicit Dependency
class Baby {
    constructor(_money) {
        this.Money = _money;
    }
    ShowWallet() {
        console.log("Total money" + this.Money.GiveMoney);
    }
}
