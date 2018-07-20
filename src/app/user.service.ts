import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  money = 0;

  addMoney(): void {
    this.money += 100;
  }

  canBet(): boolean {
    return this.money >= 100;
  }

  bet(): boolean {
    if (this.canBet()) {
      this.money = this.money - 100;
      return true;
    }
    return false;
  }
}
