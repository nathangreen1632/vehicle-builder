// import classes
import Car from './classes/Car';
import Motorbike from './classes/Motorbike';
import Wheel from './classes/Wheel';
import Cli from './classes/Cli';
import Truck from './classes/Truck';

const vehicles = [];

const truck1 = new Truck(
  Cli.generateVin(),
  'Red',
  'Toyota',
  'Tundra TRD Off-Road',
  2020,
  6500,
  120,
  [],
  10000,
);

const car1 = new Car(
  Cli.generateVin(),
  'Blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  [],
);

const motorbike1Wheels: Wheel[] = [
  new Wheel(18, 'Metzeler Cruisetec'),
  new Wheel(18, 'Metzeler Cruisetec'),
];
const motorbike1 = new Motorbike(
  Cli.generateVin(),
  'Black',
  'Harley Davidson',
  'Sportster',
  2025,
  74,
  130,
  motorbike1Wheels,
);

console.log(motorbike1.wheelie());

vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

const cli = new Cli(vehicles);

cli.startCli();
