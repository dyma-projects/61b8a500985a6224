import { Component, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  compteur: number = 0;
  @Output()
  emetteur: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit() {
    this.emetteur.emit(this.compteur);
  }

  compte(choice?: string) {
    if (choice) this.compteur++;
    else this.compteur--;
    this.emetteur.emit(this.compteur);
  }
}
