import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat/chat.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  //Importando variável
  public chat: Chat = {};
  //Varíavel global que traz o id da conversa
  private chatId: string = undefined;
  // Subscription
  public chatSubs: Subscription;

  //Variáveis globais de mensagens
  //Remetente

  x1 = false;
  x2 = false;
  x3 = false;
  x4 = false;
  x5 = false;
  x6 = false;
  x7 = false;
  x8 = false;
  x9 = false;
  x10 = false;
  x11 = false;
  x12 = false;
  x13 = false;
  x14 = false;
  x15 = false;
  x16 = false;
  x17 = false;
  x18 = false;
  x19 = false;
  x20 = false;

  //Destinatário
  y1 = false;
  y2 = false;
  y3 = false;
  y4 = false;
  y5 = false;
  y6 = false;
  y7 = false;
  y8 = false;
  y9 = false;
  y10 = false;
  y11 = false;
  y12 = false;
  y13 = false;
  y14 = false;
  y15 = false;
  y16 = false;
  y17 = false;
  y18 = false;
  y19 = false;
  y20 = false;

  //Variável para voltar ao initial
  voltar = false

  

  constructor(
    private chatService: ChatService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    
    this.chatId = this.activatedRoute.snapshot.params['id'];
    if (this.chatId) this.loadChat();

    
  }

  ngOnInit() {
    
  }

  //Método de load Chat que traz os dados do firebase pelo service
  loadChat() {
    this.chatSubs = this.chatService.getChat(this.chatId).subscribe(data => {
      this.chat = data;

    //Mensagem 1
    if ((this.chat.msgx1 == undefined) && (this.chat.msgy1 == undefined)) {
      this.x1 = false;
      this.y1 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx1 == undefined){
        this.x1 = false;
        this.y1 = true;
      }
      if(this.chat.msgy1 == undefined){
        this.y1 = false;
        this.x1 = true;
      }
    }

    //Mensagem 2
    if ((this.chat.msgx2 == undefined) && (this.chat.msgy2 == undefined)) {
      this.x2 = false;
      this.y2 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx2 == undefined){
        this.x2 = false;
        this.y2 = true;
      }
      else{
        this.y2 = false;
        this.x2 = true;
      }
    }

     //Mensagem 3
     if ((this.chat.msgx3 == undefined) && (this.chat.msgy3 == undefined)) {
      this.x3 = false;
      this.y3 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx3 == undefined){
        this.x3 = false;
        this.y3 = true;
      }
      else{
        this.y3 = false;
        this.x3 = true;
      }
    }

     //Mensagem 4
     if ((this.chat.msgx4 == undefined) && (this.chat.msgy4 == undefined)) {
      this.x4 = false;
      this.y4 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx4 == undefined){
        this.x4 = false;
        this.y4 = true;
      }
      else{
        this.y4 = false;
        this.x4 = true;
      }
    }

    //Mensagem 5
    if ((this.chat.msgx5 == undefined) && (this.chat.msgy5 == undefined)) {
      this.x5 = false;
      this.y5 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx5 == undefined){
        this.x5 = false;
        this.y5 = true;
      }
      else{
        this.y5 = false;
        this.x5 = true;
      }
    }

    //Mensagem 6
    if ((this.chat.msgx6 == undefined) && (this.chat.msgy6 == undefined)) {
      this.x6 = false;
      this.y6 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx6 == undefined){
        this.x6 = false;
        this.y6 = true;
      }
      else{
        this.y6 = false;
        this.x6 = true;
      }
    }

    //Mensagem 7
    if ((this.chat.msgx7 == undefined) && (this.chat.msgy7 == undefined)) {
      this.x7 = false;
      this.y7 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx7 == undefined){
        this.x7 = false;
        this.y7 = true;
      }
      else{
        this.y7 = false;
        this.x7 = true;
      }
    }

    //Mensagem 8
    if ((this.chat.msgx8 == undefined) && (this.chat.msgy8 == undefined)) {
      this.x8 = false;
      this.y8 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx8 == undefined){
        this.x8 = false;
        this.y8 = true;
      }
      else{
        this.y8 = false;
        this.x8 = true;
      }
    }

    //Mensagem 9
    if ((this.chat.msgx9 == undefined) && (this.chat.msgy9 == undefined)) {
      this.x9 = false;
      this.y9 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx9 == undefined){
        this.x9 = false;
        this.y9 = true;
      }
      else{
        this.y9 = false;
        this.x9 = true;
      }
    }

    //Mensagem 10
    if ((this.chat.msgx10 == undefined) && (this.chat.msgy10 == undefined)) {
      this.x10 = false;
      this.y10 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx10 == undefined){
        this.x10 = false;
        this.y10 = true;
      }
      else{
        this.y10 = false;
        this.x10 = true;
      }
    }

    //Mensagem 11
    if ((this.chat.msgx11 == undefined) && (this.chat.msgy11 == undefined)) {
      this.x11 = false;
      this.y11 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx11 == undefined){
        this.x11 = false;
        this.y11 = true;
      }
      else{
        this.y11 = false;
        this.x11 = true;
      }
    }

    //Mensagem 12
    if ((this.chat.msgx12 == undefined) && (this.chat.msgy12 == undefined)) {
      this.x12 = false;
      this.y12 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx12 == undefined){
        this.x12 = false;
        this.y12 = true;
      }
      else{
        this.y12 = false;
        this.x12 = true;
      }
    }

    //Mensagem 13
    if ((this.chat.msgx13 == undefined) && (this.chat.msgy13 == undefined)) {
      this.x13 = false;
      this.y13 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx13 == undefined){
        this.x13 = false;
        this.y13 = true;
      }
      else{
        this.y13 = false;
        this.x13 = true;
      }
    }

    //Mensagem 14
    if ((this.chat.msgx14 == undefined) && (this.chat.msgy14 == undefined)) {
      this.x14 = false;
      this.y14 = false;
      this.voltar = true;
    }
    else {
      if(this.chat.msgx14 == undefined){
        this.x14 = false;
        this.y14 = true;
      }
      else{
        this.y14 = false;
        this.x14 = true;
      }
    }

   //Mensagem 15
   if ((this.chat.msgx15 == undefined) && (this.chat.msgy15 == undefined)) {
    this.x15 = false;
    this.y15 = false;
    this.voltar = true;
  }
  else {
    if(this.chat.msgx15 == undefined){
      this.x15 = false;
      this.y15 = true;
    }
    else{
      this.y15 = false;
      this.x15 = true;
    }
  }

    //Mensagem 16
   if ((this.chat.msgx16 == undefined) && (this.chat.msgy16 == undefined)) {
    this.x16 = false;
    this.y16 = false;
    this.voltar = true;
  }
  else {
    if(this.chat.msgx16 == undefined){
      this.x16 = false;
      this.y16 = true;
    }
    else{
      this.y16 = false;
      this.x16 = true;
    }
  }

    //Mensagem 17
   if ((this.chat.msgx17 == undefined) && (this.chat.msgy17 == undefined)) {
    this.x17 = false;
    this.y17 = false;
    this.voltar = true;
  }
  else {
    if(this.chat.msgx17 == undefined){
      this.x17 = false;
      this.y17 = true;
    }
    else{
      this.y17 = false;
      this.x17 = true;
    }
  }

    //Mensagem 18
   if ((this.chat.msgx18 == undefined) && (this.chat.msgy19 == undefined)) {
    this.x18 = false;
    this.y18 = false;
    this.voltar = true;
  }
  else {
    if(this.chat.msgx18 == undefined){
      this.x18 = false;
      this.y18 = true;
    }
    else{
      this.y18 = false;
      this.x18 = true;
    }
  }

    //Mensagem 19
   if ((this.chat.msgx19 == undefined) && (this.chat.msgy19 == undefined)) {
    this.x19 = false;
    this.y19 = false;
    this.voltar = true;
  }
  else {
    if(this.chat.msgx19 == undefined){
      this.x19 = false;
      this.y19 = true;
    }
    else{
      this.y19 = false;
      this.x19 = true;
    }
  }

    //Mensagem 20
   if ((this.chat.msgx20 == undefined) && (this.chat.msgy20 == undefined)) {
    this.x20 = false;
    this.y20 = false;
    this.voltar = true;
  }
  else {
    if(this.chat.msgx20 == undefined){
      this.x20 = false;
      this.y20 = true;
    }
    else{
      this.y20 = false;
      this.x20 = true;
    }
  }
      
    });
  }

  //Método de voltar
  gotoInitial(){
    this.router.navigate(['initial']);
  }
}