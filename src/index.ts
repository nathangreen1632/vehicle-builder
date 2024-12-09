// import classes
import Car from './classes/Car';
import Motorbike from './classes/Motorbike';
import Wheel from './classes/Wheel';
import Cli from './classes/Cli';
import Truck from './classes/Truck';

const vehicles = [];

const truck1Wheels: Wheel[] = [
  new Wheel(18, 'Mickey Thompson Baja Boss A/T'),
  new Wheel(18, 'Mickey Thompson Baja Boss A/T'),
  new Wheel(18, 'Mickey Thompson Baja Boss A/T'),
  new Wheel(18, 'Mickey Thompson Baja Boss A/T'),
];

const truck1 = new Truck(
  Cli.generateVin(),
  'Red',
  'Toyota',
  'Tundra TRD Off-Road',
  2020,
  6500,
  120,
  truck1Wheels,
  12000,
);

const car1Wheels: Wheel[] = [
  new Wheel(16, 'Michelin Pilot Sport 4S'),
  new Wheel(16, 'Michelin Pilot Sport 4S'),
  new Wheel(16, 'Michelin Pilot Sport 4S'),
  new Wheel(16, 'Michelin Pilot Sport 4S'),
];
const car1 = new Car(
  Cli.generateVin(),
  'Blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  car1Wheels,
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

vehicles.push(truck1);
vehicles.push(car1);
vehicles.push(motorbike1);

const cli = new Cli(vehicles);

cli.startCli();
