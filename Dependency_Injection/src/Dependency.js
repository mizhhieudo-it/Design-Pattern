"use strict";
class Daddy {
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
class Son {
    constructor(_money) {
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
