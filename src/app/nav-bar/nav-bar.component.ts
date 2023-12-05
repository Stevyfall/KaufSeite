import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

 // titreArticle :string = "Titre"
 // preis:number =12;
 // textAltImg:string="BildTitle";
 // urlImg:string ="https://via.placeholder.com/400x250";

  nbrLikes:number=0;
  @Input() titreArticle:string;
  @Input() preis:number;
  @Output() info = new EventEmitter<string>
  @Input() dispo: boolean;
  @Input() Beschreibung:string;
  @Input() urlImg:string;
  @Input() textAltImg:string;
  @Input() idd:number;
  constructor(){
  }
  onLike(){
    this.nbrLikes++;
    this.info.emit(this.titreArticle);
  }

}
