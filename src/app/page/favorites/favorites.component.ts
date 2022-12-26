import {Component} from "@angular/core";

@Component({

  selector:'favorites',
  templateUrl:'./favorites.component.html',
  styleUrls:['./favorites.component.css']
})

export class FavoritesComponent{

  danhsach:any =[
    {name:'Gemma Roberson',DiaChi:'Apology for late respone email',Text:'Hello Colette Wooten,'},
    {name:'Ann Garza',DiaChi:'Application for Job Title',Text:'Hello Colette Wooten,'},
    {name:'Alfonso Burnett',DiaChi:'Anything I can help with',Text:'Hello Colette Wooten,'},
    {name:'Rogan Espinoza',DiaChi:'Assistant Marketing Department',Text:'Hello Colette Wooten,'},
    {name:'Sierra Kerr',DiaChi:'Application for Transfer',Text:'Hello Colette Wooten,'}
  ];
}
