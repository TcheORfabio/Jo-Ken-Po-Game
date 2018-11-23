import { Component, OnInit } from '@angular/core';
import { PlayerChoices } from '../player/player.component';

enum GameStatus {
  Waiting  = 'Waiting...',
  PlayerWon = 'Player Wins!',
  PCWon = 'Computer Wins!',
  Draw = 'Draw!'
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  public score = { player: 0, pc: 0 };
  private _gameStatus = GameStatus.Waiting;
  private _player: PlayerChoices = PlayerChoices.Rock;
  private _pcHand: PlayerChoices = PlayerChoices.Paper;
  constructor() { }

  ngOnInit() {
  }

  get gameStatus() {
    return this._gameStatus;
  }

  set gameStatus(value) {
    this._gameStatus = value;
  }

  get pcHand() {
    return this._pcHand;
  }

  setPcHand() {
    this._pcHand = Math.floor(Math.random() * 3);
  }

  get playerHand () {
    return this._player;
  }

  setPlayerHand(value: number) {
    let result = this._player + value;
    if(result < 0) {
      result = 2;
    } else if (result > 2) {
      result = 0;
    }
    this._player = result;
  }

  checkWinner() {
    if (this.playerHand === PlayerChoices.Paper) {
      if (this.pcHand === PlayerChoices.Paper) {
        this.gameStatus = GameStatus.Draw;
      } else if (this.pcHand === PlayerChoices.Rock) {
        this.gameStatus = GameStatus.PlayerWon;
        this.score.player++;
      } else if (this.pcHand === PlayerChoices.Scissors) {
        this.gameStatus = GameStatus.PCWon;
        this.score.pc++;
      }
    } else if (this.playerHand === PlayerChoices.Rock) {
      if (this.pcHand === PlayerChoices.Paper) {
        this.gameStatus = GameStatus.PCWon;
        this.score.pc++;
      } else if (this.pcHand === PlayerChoices.Rock) {
        this.gameStatus = GameStatus.Draw;
      } else if (this.pcHand === PlayerChoices.Scissors) {
        this.gameStatus = GameStatus.PlayerWon;
        this.score.player++;
      }
    } else if (this.playerHand === PlayerChoices.Scissors) {
      if (this.pcHand === PlayerChoices.Paper) {
        this.gameStatus = GameStatus.PlayerWon;
        this.score.player++;
      } else if (this.pcHand === PlayerChoices.Rock) {
        this.gameStatus = GameStatus.PCWon;
        this.score.pc++;
      } else if (this.pcHand === PlayerChoices.Scissors) {
        this.gameStatus = GameStatus.Draw;
      }
    }
  }

  startGame() {
    this.setPcHand();
    this.checkWinner();
  }

  resetScore() {
    this.score = { player: 0, pc: 0 };
  }
}
