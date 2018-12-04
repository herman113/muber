class Car {
  constructor() {
    // this.drive = this.drive.bind(this);
  }
  setDriveSound(sound) {
    this.sound = sound;
  }
  drive() {
    return this.sound;
  }
  setColor(color) {
    this.color = color;
    return this.color;
  }
  
}

const car = new Car();
car.setDriveSound('vroom');
console.log(car.drive());
console.log(car.setColor("red"));



const truck = {
  sound: 'putputput',
  driveMyTruck: car.drive
}

console.log(truck.driveMyTruck()); 


const drive = car.drive;


console.log(drive());