import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tavani-tombola';
  estrai (){
    var numero= Math.round(Math.random()*99+1);
    console.log(numero);
    return false;
  }
}
