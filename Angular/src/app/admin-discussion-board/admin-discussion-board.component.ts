import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Message } from '../message';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-discussion-board',
  templateUrl: './admin-discussion-board.component.html',
  styleUrls: ['./admin-discussion-board.component.css']
})
export class AdminDiscussionBoardComponent implements OnInit {

  constructor(public userService: UserService) {
    this.userService.getMessageData().subscribe((data) => {
      console.log(data.discussionBoardBeanList);
      this.messages = data.discussionBoardBeanList;
    });
   }
   selectedMessage: Message = {
     id: null,
     messageId: null,
     messageType: null,
    email: null,
     message: null

  };
  messages: [];
  selectMessage(messages: Message) {
    this.selectedMessage = messages;
  }

  giveReplyForm(giveReply: NgForm) {
    console.log(giveReply.value);
    this.userService.sendReplyToUser(giveReply.value).subscribe(res => {
      console.log(res);

    },
      err => {
        console.log(err);
      });
  }


  ngOnInit() {
  }

}
