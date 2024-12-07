// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
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
    this.towingCapacity = towingCapacity;

    if (wheels.length < 4) {
      this.wheels.push(new Wheel(17, 'Michelin'));
      this.wheels.push(new Wheel(17, 'Michelin'));
      this.wheels.push(new Wheel(17, 'Michelin'));
      this.wheels.push(new Wheel(17, 'Michelin'));
    }
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    const vehicleMake: string = vehicle.make;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Vehicle ${vehicleMake} is being towed`);
    } else {
      console.log(`Vehicle ${vehicleMake} is too heavy to be towed`);
    }
  }

  override printDetails(): void {
    super.printDetails();
    console.log(
      `Vehicle details -  Vin: ${this.vin} Make: ${this.make} Model: ${this.model} Year: ${this.year} Weight: ${this.weight} TopSpeed: ${this.topSpeed} Color: ${this.color} TowingCapacity: ${this.towingCapacity} Wheels: ${this.wheels}`,
    );
  }
}

// Export the Truck class as the default export
export default Truck;
