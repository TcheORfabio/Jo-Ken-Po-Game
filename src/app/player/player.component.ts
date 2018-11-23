import { Component, OnInit, Input } from '@angular/core';

export enum PlayerChoices {
  Paper = 0,
  Rock,
  Scissors,
}

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() public playerHand: PlayerChoices = PlayerChoices.Paper; 
  constructor() { }

  ngOnInit() {
  }
}
