import {Component} from '@angular/core'
@Component({
selector: 'messages',
template: 'this is a message component. <div *ngFor="let msg of messages"> {{msg.text}} by {{msg.owner}}</div> '



})

export class MessagesComponent
{
messages= [{text:'text1', owner:'Mahesh'}, {text:'text2', owner:'Umesh'}];
}