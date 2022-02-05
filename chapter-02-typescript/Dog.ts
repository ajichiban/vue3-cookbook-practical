
import { Animal, FoodChainType } from './Animal'

export class Dog extends Animal {

  constructor() {
    super({
      name: 'Dog',
      sound: 'Wof!',
      family: 'Canidae',
      foodChainType: FoodChainType.Carnivorous,
    })
  }

}