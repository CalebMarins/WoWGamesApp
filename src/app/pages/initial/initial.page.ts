import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.page.html',
  styleUrls: ['./initial.page.scss'],
})
export class InitialPage implements OnInit {

  // Variável global que armazena o code
  codeScanneado = null

  constructor(
    private alertC : AlertController,
    private barcode : BarcodeScanner,
    private router : Router
  ) { }

  ngOnInit() {
  }

  //Método de duvida - quando o botão de duvida for pressionado
  async duvida(){
    const alert = await this.alertC.create({
      message: '<h5 class="vermelho">Isso é um teste</h5>',
      mode:'ios'

  });
  alert.present();
  }

  //Método de scan
  scan(){
    this.barcode.scan().then(async barD=>{
      this.codeScanneado = barD.text;
      if(barD.text == this.codeScanneado){
        this.router.navigate(['/chat', this.codeScanneado]);
      }
    })
  }

}
