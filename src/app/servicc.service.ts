import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiccService {
  ListeArticles=[
    {
      idd:1,
      titreArticle:"Fahrrad",
      preis:250,
      Beschreibung:"Ein Fahrrad",
      urlImg:"../assets/Fahrrad.jpg",
      textAltImg: "ein Fahrrad",
      dispo:false
    },
    {  idd:2,titreArticle:"Fernseher",
    preis:500,
    Beschreibung:"Ein Fernseher",
    urlImg:"../assets/Fernseher.jpeg",
    textAltImg: "ein Fernseher",
    dispo:true},
    {  idd:3,titreArticle:"Spielzeug",
    preis:25,
    Beschreibung:"Ein Spielzeug",
    urlImg:"../assets/Spielzeug.jpg",
    textAltImg: "ein Spielzeug",
    dispo:true}
  ]

  constructor() { }
  getArtikel(id:number){
const Artikels = this.ListeArticles.find((a)=>{
  return a.idd == id;
});
return Artikels;
  }
}
