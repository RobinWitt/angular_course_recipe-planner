export default class Recipe {
  public id: string;
  public name: string;
  public description: string;
  public imageUrl: string;

  constructor(id: string, name: string, desc: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imageUrl = imageUrl;
  }
}
