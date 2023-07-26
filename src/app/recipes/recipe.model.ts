import Ingredient from '../shared/ingredient.model';

export default class Recipe {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public imageUrl: string,
    public ingredients: Ingredient[]
  ) {}
}
