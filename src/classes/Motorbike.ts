import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;

    if (wheels.length < 3) {
      this.wheels.push(new Wheel(17, 'Michelin'));
      this.wheels.push(new Wheel(17, 'Michelin'));
    }
  }

  wheelie(): string {
    return `Motorbike ${this.make} ${this.model} is doing a wheelie!`;
  }

  override printDetails(): void {
    super.printDetails();
    console.log(
      `Vehicle details -  Vin: ${this.vin} Make:${this.make} Model: ${this.model} Year: ${this.year} Weight: ${this.weight} TopSpeed: ${this.topSpeed} Color: ${this.color} Wheels: ${this.wheels}`,
    );
  }
}

export default Motorbike;
