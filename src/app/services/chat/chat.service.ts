import { Chat } from './../../interfaces/chat';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  //Importando interface no firestore
  private chatCollection : AngularFirestoreCollection<Chat>;
  constructor(
    private afs : AngularFirestore,
  ) {
    //Instanciando o nome do banco de dados de Chat no firebase
    this.chatCollection = this.afs.collection<Chat>('Chat');
   }

   //Listar todos os chats presentes na collection
   getChats(){
     return this.chatCollection.snapshotChanges().pipe(
       map(actions=>{
         return actions.map(a=>{
           const data = a.payload.doc.data();
           const id = a.payload.doc.id;

           return{id, ...data};
         });
       })
     )
   }

   //Pegando uma conversa específica
   getChat(id:string){
     return this.chatCollection.doc<Chat>(id).valueChanges();
   }
}
