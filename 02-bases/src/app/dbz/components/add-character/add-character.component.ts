import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // Se crea un evento para que le padre (main-page.component.ts) pueda escucharlo
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  emitCharacter() {
    // Verifica que el nombre no esté vacío
    if(this.character.name.length === 0) return;

    // Emite el evento al padre (main-page.component.ts)
    this.onNewCharacter.emit(this.character);

    this.character = {name: '', power: 0};
  }
}
