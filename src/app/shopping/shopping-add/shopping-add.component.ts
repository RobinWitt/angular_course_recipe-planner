import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import Ingredient from 'src/app/shared/ingredient.model';

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
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  handleAddIngredient(): void {
    const ingredientName = String(this.nameInputRef.nativeElement.value);
    const ingredientAmount = Number(this.amountInputRef.nativeElement.value);
    const ingredientUnit = String(this.unitInputRef.nativeElement.value);
    const newIngredient = new Ingredient(
      ingredientName,
      ingredientAmount,
      ingredientUnit
    );
    this.ingredientAdded.emit(newIngredient);
  }
}
