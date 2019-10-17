import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  autor: string = "Josseph Pascal Liper Fifen Ousseni ";
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) =>{
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 4000
    );
  });

  appareils= [
    {
      name: 'fien ',
      status: 'éteint'
    },
    {
      name: 'ousseni ',
      status: 'allumé'
    },
    {
      name: 'joseph ',
      status: 'éteint'
    },
    {
      name: 'pascal ',
      status: 'allumé'
    }
  ];

  constructor(){
    setTimeout(
      () =>{
        this.isAuth = true;
      }, 4000
    );
  }

  onAllume(){
    alert("tout allumer");
  }

}
