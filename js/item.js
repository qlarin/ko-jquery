/**
 * Created by Stan on 17/04/2016.
 */

// An item object
function Item(amount, component) {
    var self = this;
    self.amount = ko.observable(amount);
    self.component = ko.observable(component);

    self.formattedPrice = ko.computed(function() {
        var price = self.component().price * self.amount().quantity;
        return price ? price.toFixed(2) + "zl" : "None";
    });
}
