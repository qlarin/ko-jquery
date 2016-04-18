/**
 * Created by Stan on 17/04/2016.
 */

$(document).ready(function(){

    function WarehouseViewModel() {
        var self = this;
        self.summary = ko.observable(true);

        // Non-editable catalog data - would come from Rest Api, or DB - just for example
        self.availableComponents = [
            { part: "Intel Pentium G3260", price: 239, type: "Processor" },
            { part: "AMD FX-8350", price: 729, type: "Processor" },
            { part: "MSI Z170A", price: 629, type: "Motherboard" },
            { part: "Gigabyte GA-H81M-S2H", price: 211, type: "Motherboard" },
            { part: "GoodRam Play 4GB", price: 79, type: "Memory" },
            { part: "Crucial Ballistix 8GB", price: 139, type: "Memory" },
            { part: "HyperX Savage 2x4GB", price: 179, type: "Memory" },
            { part: "MSI Radeon R7 370", price: 665, type: "Video Card" },
            { part: "Gigabyte Geforce GTX950", price: 664, type: "Video Card" },
            { part: "SilentiumPC Brutus M25", price: 149, type: "Case" },
            { part: "Zalman Z3 PLUS", price: 179, type: "Case" },
            { part: "Corsair Cardibe 300R", price: 319, type: "Case" },
            { part: "Be Quiet! PP9 500W", price: 305, type: "Power Supply" },
            { part: "Thermaltake 530W", price: 229, type: "Power Supply" },
            { part: "Cooler Master 550W", price: 307, type: "Power Supply" },
            { part: "Seagate 1TB", price: 219, type: "Hard Drive" },
            { part: "WD Blue 1TB", price: 225, type: "Hard Drive" }
        ];

        // Non-editable amount data
        self.availableAmounts = [
            { quantity: 1 },
            { quantity: 2 },
            { quantity: 3 },
            { quantity: 4 }
        ];

        // Editable inventory
        self.inventory = ko.observableArray([]);

        //Operations
        self.addToInventory = function() {
            self.inventory.push(new Item(self.availableAmounts[0], self.availableComponents[0]));
        }

        self.removeFromInventory = function(component) { self.inventory.remove(component) }

        self.totalCost = ko.computed(function() {
            var total = 0;
            for (var i = 0; i < self.inventory().length; i++)
                total += self.inventory()[i].component().price * self.inventory()[i].amount().quantity;
            return total;
        });

        self.remains = ko.computed(function() {
            var max = 10;
            return max - self.inventory().length;
        });

        self.getSummary = function() {
            self.summary(false);
        }
    }
    ko.applyBindings(new WarehouseViewModel());
});