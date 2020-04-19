import {Component} from '@angular/core'
@Component({
selector: 'messages',
template: 'this is a message component.The mumber of messges are : {{messages.length}}  The first message is {{messages[0].text}} owner is {{messages[0].owner}} '



})

export class MessagesComponent
{
messages= [{text:'text1', owner:'Mahesh'}, {text:'text2', owner:'Umesh'}];
}