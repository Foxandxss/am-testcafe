import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-addmoney',
  templateUrl: './addmoney.component.html',
  styleUrls: ['./addmoney.component.css']
})
export class AddmoneyComponent {

  constructor(private userService: UserService) {}

  getCash() {
    this.userService.addMoney();
  }

}
