import { Component,OnInit, OnDestroy } from '@angular/core';
import { ServiccService } from './servicc.service';
import { interval, Subscription } from 'rxjs';
import { map,filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'angpage';
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
secondes;
counterSub : Subscription;
  ngOnInit(): void {
      this.Liste = this.data.ListeArticles;

      const compteur = interval(1000).pipe(
        filter(value => value % 2 === 0),
        map(value => value % 2 === 0 ?
          `${value} ist gerade`:`${value} ist ungerade`)
      );
       this.counterSub = compteur.subscribe({
        next: (v) => this.secondes = v,
        error: (e) => console.error(e),
        complete: () => console.info('complete')

       })
  }
  ngOnDestroy(): void {
      this.counterSub.unsubscribe();
  }
}
