"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LogInComponent = (function () {
    function LogInComponent(_router) {
        this._router = _router;
    }
    LogInComponent.prototype.onClick = function () {
        var email = document.getElementById("inputMail").value;
        var pass = document.getElementById("inputPass").value;
        if (email == "" || pass == "") {
            alert("Debes llenar ambos campos!");
        }
        else {
            this._router.navigate(['/Shop']);
        }
    };
    return LogInComponent;
}());
LogInComponent = __decorate([
    core_1.Component({
        selector: 'logInComponent',
        template: "\n  <div class=\"logIn\">\n      <h1>Inicia Sesi\u00F3n</h1>\n      <h2>Correo Electr\u00F3nico</h2>\n      <input id=\"inputMail\" type=\"text\" name=\"fname\">\n     <h2>Contrase\u00F1a</h2>\n     <input id=\"inputPass\" type=\"text\" name=\"fcontra\">\n  </div>\n  <div class=\"logIn\">\n     <input type=\"submit\" (click) = \"onClick()\" value=\"Ingresar\">\n  </div>\n   ",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], LogInComponent);
exports.LogInComponent = LogInComponent;
//# sourceMappingURL=component_log_in.js.map