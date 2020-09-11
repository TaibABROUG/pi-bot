import { Component, OnInit  , AfterViewInit,  ViewChild, ViewChildren, ElementRef,   QueryList, HostListener} from '@angular/core';
import * as io from 'socket.io-client';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-test-bot',
  templateUrl: './test-bot.component.html',
  styleUrls: ['./test-bot.component.css']
})
export class TestBotComponent implements AfterViewInit   {
  socket:any
  id_agent = "" ; 
  public myUserId: string;
  chats = [];
  chat_input:string;
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;
  private itemContainer: any;
  private scrollContainer: any;
  private items = [];
  private isNearBottom = true;
  constructor(   private actRoute: ActivatedRoute,) { 
    if(this.myUserId == null){
      this.myUserId = Date.now().toString();
  }
  this.id_agent = this.actRoute.snapshot.paramMap.get("id_agent");

  this.socket = io('http://localhost:4000');

  this.Receive();
  }
  send(msg) {
    if(msg != ''){
        let saltedMsg = this.id_agent+"|"+this.myUserId+"#"+msg;
        this.socket.emit('message', saltedMsg);
    }
    this.chat_input = '';
}

Receive(){
    this.socket.on('message', (msg) => {

    let saletdMsgArr = msg.split('#'); 
    var item = {};
    
    if(saletdMsgArr[0] == this.id_agent+"|"+this.myUserId){
        item = {"styleClass": "chat-message right", "msgStr": saletdMsgArr[1]};
    }
    else{ if (saletdMsgArr[0] == "bot"+this.id_agent+"|"+this.myUserId){
        item = {"styleClass": "chat-message left", "msgStr": saletdMsgArr[1]};}
    }

    this.chats.push(item);

    });

}
private onItemElementsChanged(): void {

    this.scrollToBottom();
  
}

private scrollToBottom(): void {
  this.scrollContainer.scroll({
    top: this.scrollContainer.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
}

// private isUserNearBottom(): boolean {
//   const threshold = 150;
//   const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
//   const height = this.scrollContainer.scrollHeight;
//   return position > height - threshold;
// }

// scrolled(event: any): void {
//   this.isNearBottom = this.isUserNearBottom();
// }
 
ngAfterViewInit() {
 this.scrollContainer = this.scrollFrame.nativeElement;
  this.itemElements.changes.subscribe(_ => this.onItemElementsChanged());    

  // Add a new item every 2 seconds for demo purposes

}
handleKeyUp(e){
  if(e.keyCode === 13){
     this.send(this.chat_input);
  }
}

}
