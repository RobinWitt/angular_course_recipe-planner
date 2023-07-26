import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import getRandomInt from 'src/app/lib/getRandomInt';
import Ingredient from 'src/app/shared/ingredient.model';
import { IngredientService } from 'src/app/shared/ingredient.service';

@Component({
  selector: 'app-shopping-add',
  templateUrl: './shopping-add.component.html',
  styleUrls: ['./shopping-add.component.css'],
})
export class ShoppingAddComponent {
  @ViewChild('nameInput', { static: false })
  nameInputRef: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('amountInput', { static: false })
  amountInputRef: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('unitInput', { static: false })
  unitInputRef: ElementRef<HTMLInputElement> = {} as ElementRef;
  @Output() ingredientAdded = new EventEmitter();

  constructor(private ingredientService: IngredientService) {}

  handleAddIngredient(): void {
    const ingredientId = String(getRandomInt(150, 200));
    const ingredientName = String(this.nameInputRef.nativeElement.value);
    const ingredientAmount = Number(this.amountInputRef.nativeElement.value);
    const ingredientUnit = String(this.unitInputRef.nativeElement.value);
    const newIngredient = new Ingredient(
      ingredientId,
      ingredientName,
      ingredientAmount,
      ingredientUnit
    );
    this.ingredientService.addNewIngredient(newIngredient);
    this.ingredientAdded.emit();
    this.nameInputRef.nativeElement.value = '';
    this.amountInputRef.nativeElement.value = '';
    this.unitInputRef.nativeElement.value = '';
  }
}
