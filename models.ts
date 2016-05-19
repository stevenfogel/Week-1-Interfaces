namespace app.models {
export class Car implements IVehicle {

  constructor(
    public make: string,
    public model: string,
    public color: string,
    public numDoors: number,
    public numSeats: number,
    public looksCool: boolean = true
  ) { }

}

export class Truck implements IVehicle {

  constructor (
    public make: string,
    public model: string,
    public color: string,
    public numDoors: number,
    public numSeats: number,
    public hasBench: boolean
  ) {}

}
}
