import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiccService } from '../servicc.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
ngOnInit(): void {
  const id= this.route.snapshot.params["id"];
  this.id = id;
  this.titel = this.data.getArtikel(id).titreArticle;
  this.preis = this.data.getArtikel(id).preis;
  this.Beschreibung = this.data.getArtikel(id).Beschreibung;
  this.urlImg = this.data.getArtikel(id).urlImg;
}
id;
titel:string;
preis:number;
Beschreibung:string;
urlImg:string;

constructor( private route:ActivatedRoute,
  private data:ServiccService){
 
}
}
