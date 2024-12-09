import Vehicle from './Vehicle';
import Wheel from './Wheel';

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

    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  wheelie(): string {
    return `Motorbike ${this.make} ${this.model} is doing a wheelie!`;
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
      color: `Color: ${this.color}\n`,
      weight: `Weight: ${this.weight}\n`,
      topSpeed: `TopSpeed: ${this.topSpeed}\n`,

    }
    const vehicleDetailsString = `${Object.values(vehicleDetails).join(' ')}`;
    const wheelDetails : string = this.displayWheels;

    console.log(`${vehicleDetailsString}\n${wheelDetails}`);
  }
}

export default Motorbike;
