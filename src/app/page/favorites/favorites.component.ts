import {Component} from "@angular/core";

@Component({

  selector:'favorites',
  templateUrl:'./favorites.component.html',
  styleUrls:['./favorites.component.css']
})

export class FavoritesComponent{

  danhsach:any =[
    {name:'Gemma Roberson',Dc1:'Apology for late respone email',Text:'Hello Colette Wooten,'},
    {name:'Ann Garza',Dc1:'Application for Job Title',Text:'Hello Colette Wooten,'},
    {name:'Alfonso Burnett',Dc1:'Anything I can help with',Text:'Hello Colette Wooten,'},
    {name:'Rogan Espinoza',Dc1:'Assistant Marketing Department',Text:'Hello Colette Wooten,'},
    {name:'Sierra Kerr',Dc1:'Application for Transfer',Text:'Hello Colette Wooten,'}
  ];
}
