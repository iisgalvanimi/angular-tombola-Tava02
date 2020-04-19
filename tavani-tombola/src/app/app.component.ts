import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tavani-tombola';
  numeriUsciti: Array<number>=[];
  ultimoNumero:string="...";
  estrai (){
   var check=false;
    while(check==false){
      var numero= Math.round(Math.random()*98+1);
      check=true;
      for (var i=0; i< this.numeriUsciti.length; i++){
        if (numero==this.numeriUsciti[i]){
          check=false;
        }
      }
      if (check){
        this.numeriUsciti.push(numero);
        console.log(numero);
        var riga=document.getElementById("numero");
        riga.innerHTML=""+numero;
        this.ultimoNumero=""+numero;
        if (this.numeriUsciti.length==99){

          console.log("numeri finit!");
          var bottone= document.getElementById("bottone");
          bottone.setAttribute("disabled","disabled");
          alert("Tutti i numeri sono stati estratti!");
          return false;
        }
      }
    }
    return false;
  }
}
