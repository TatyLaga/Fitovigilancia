import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

import { GenerarPage } from '../generar/generar';
import { HistoricoPage } from '../historico/historico';
import {RegistroPage} from '../registro/registro';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
  
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }



  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  ngAfterViewInit() {
    this.slides.freeMode = true;
  }

  public gotoGenerar(){
    
    this.navCtrl.push(GenerarPage);
}

public gotoHistorico(){
    
  this.navCtrl.push(HistoricoPage);
}

public gotoRegistro(){
    
  this.navCtrl.push(RegistroPage);
}

}
