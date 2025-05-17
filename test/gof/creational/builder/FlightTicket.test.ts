import FlightTicket from "~/gof/creational/builder/FlightTicket";
import FlightTicketBuilder from "~/gof/creational/builder/FlightTicketBuilder";

test("Deve criar uma passagem aérea", function () {
  const builder = new FlightTicketBuilder()
    .setFlight("Azul", "9876")
    .setTrip("FLN", "GRU")
    .setPassenger("John Doe", "john.doe@gmail.com", "111.111.111-11", "M")
    .setEmergencyContact("Bob Simpson", "551199999999")
    .setSeat("8A")
    .setCheckedBags(2)
    .setCheckInInformation(true, "1", "4A")
    .setPriority(5);
  const flightTicket = new FlightTicket(builder);
  expect(flightTicket.flightCode).toBe("9876");
  expect(flightTicket.passengerName).toBe("John Doe");
});
