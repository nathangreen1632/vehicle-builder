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

    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
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
get displayWheels(): string  {
    let wheelDetails: string = '';
    this.wheels.forEach((wheel : Wheel, index : number) => {
      wheelDetails += `Wheel ${index + 1}: ${wheel.getDiameter} inch with a ${wheel.getTireBrand} tire\n`;
    });
    return wheelDetails;
  }

  override printDetails(): void {
    super.printDetails();

    const vehicleDetails = {
      vin: `VIN: ${this.vin}\n`,
      make: `Make: ${this.make}\n`,
      model: `Model: ${this.model}\n`,
      year: `Year: ${this.year}\n`,
      weight: `Weight: ${this.weight}\n`,
      topSpeed: `TopSpeed: ${this.topSpeed}\n`,
      color: `Color: ${this.color}\n`,
      towingCapacity: `Tow Capacity: ${this.towingCapacity}\n`,
    }
    const vehicleDetailsString = `${Object.values(vehicleDetails).join(' ')}`;
    const wheelDetails : string = this.displayWheels;

    console.log(`${vehicleDetailsString}\n${wheelDetails}`);
  }
}

// Export the Truck class as the default export
export default Truck;
