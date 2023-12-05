import { Component,OnInit} from '@angular/core';
import {NgForm, FormControl} from '@angular/forms';

@Component({
  selector: 'app-hinzu',
  templateUrl: './hinzu.component.html',
  styleUrls: ['./hinzu.component.scss']
})
export class HinzuComponent implements OnInit{
ngOnInit(): void {}

titleToAdd=new FormControl('');
priceToAdd=new FormControl('');

constructor(){}
onSubmit(form: NgForm){
  const newTitle = this.titleToAdd;
  const newPrice = this.priceToAdd;
}
}
