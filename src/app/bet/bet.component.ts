import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css']
})
export class BetComponent {
  games = [
    {
      local: 'Madrid',
      visitor: 'Barcelona',
      betPlaced: false
    },
    {
      local: 'Málaga',
      visitor: 'Cádiz',
      betPlaced: false
    },
    {
      local: 'Sevilla',
      visitor: 'Betis',
      betPlaced: false
    }
  ];

  constructor(private userService: UserService, private router: Router) { }

  bet(game: any) {
    if (this.userService.canBet()) {
      this.userService.bet();
      game.betPlaced = true;
    } else {
      this.router.navigate(['/addmoney']);
    }
  }
}
