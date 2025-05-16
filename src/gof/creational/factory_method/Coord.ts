export default class Coord {
  constructor(readonly lat: number, readonly long: number) {
    if (lat < -90 || lat > 90)
      throw new Error("The latitude must be between -90 and 90");
    if (long < -180 || long > 180)
      throw new Error("The longitude must be between -180 and 180");
  }
}
