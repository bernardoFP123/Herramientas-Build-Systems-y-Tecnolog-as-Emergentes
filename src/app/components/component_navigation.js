"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.appTitle = 'Welcome';
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'navigation',
        template: "\n  <div class=\"navBar\">\n    <div class=navTitle>\n      La bodega\n    </div>\n    <div class=navButton>\n      <img src=\"/app/images/001-logout.svg\" height=\"30px\" width=\"30px\" alt=\"Smiley face\"  >\n    </div>\n    <div class=navButton>\n      <img src=\"/app/images/shopping-cart.svg\" height=\"30px\" width=\"30px\" alt=\"Smiley face\"  >\n    </div>\n    <div class=navButton>\n      <img src=\"/app/images/002-shopping-bag.svg\" height=\"30px\" width=\"30px\" alt=\"Smiley face\"  >\n    </div>\n\n  </div>\n\n   ",
    })
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=component_navigation.js.map