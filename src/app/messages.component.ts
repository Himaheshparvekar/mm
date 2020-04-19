import {Component} from '@angular/core'
@Component({
selector: 'messages',
template: `
<div *ngFor="let message of messages">

    <mat-card> {{message.owner}} by: {{message.text}} </mat-card>
    

</div>
`
})

export class MessagesComponent
{
messages= [{text:'text1', owner:'Mahesh'}, {text:'text2', owner:'Umesh'}];
}