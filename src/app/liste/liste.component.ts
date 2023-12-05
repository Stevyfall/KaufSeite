import { Component,OnInit } from '@angular/core';
import { ServiccService } from '../servicc.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit{

ngOnInit(): void {this.Liste = this.data.ListeArticles;}
constructor(private data:ServiccService){}
//  preis1: number=132;
  //preis2: number=260;
  //preis3: number=15;
  //preis4: number=25;
  //preis5: number=60;
  message:string ="";
Liste;
  PopUp(arg: string){
return this.message = "Danke fürs Like von: " +arg;
  }
}
