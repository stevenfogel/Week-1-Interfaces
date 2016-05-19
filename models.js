var app;
(function (app) {
    var models;
    (function (models) {
        var Car = (function () {
            function Car(make, model, color, numDoors, numSeats, looksCool) {
                if (looksCool === void 0) { looksCool = true; }
                this.make = make;
                this.model = model;
                this.color = color;
                this.numDoors = numDoors;
                this.numSeats = numSeats;
                this.looksCool = looksCool;
            }
            return Car;
        }());
        models.Car = Car;
        var Truck = (function () {
            function Truck(make, model, color, numDoors, numSeats, hasBench) {
                this.make = make;
                this.model = model;
                this.color = color;
                this.numDoors = numDoors;
                this.numSeats = numSeats;
                this.hasBench = hasBench;
            }
            return Truck;
        }());
        models.Truck = Truck;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
