import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'logInComponent',
  template: `
  <div class="logIn">
      <h1>Inicia Sesión</h1>
      <h2>Correo Electrónico</h2>
      <input id="inputMail" type="text" name="fname">
     <h2>Contraseña</h2>
     <input id="inputPass" type="text" name="fcontra">
  </div>
  <div class="logIn">
     <input type="submit" (click) = "onClick()" value="Ingresar">
  </div>
   ` ,
})
export class LogInComponent {
  constructor(private _router: Router){}
  onClick(): void {
    var email = (<HTMLInputElement>document.getElementById("inputMail")).value;
    var pass = (<HTMLInputElement>document.getElementById("inputPass")).value;
    if(email == "" || pass == ""){
      alert("Debes llenar ambos campos!");
    }
    else{
      this._router.navigate(['/Shop']);
    }
   }
 }
