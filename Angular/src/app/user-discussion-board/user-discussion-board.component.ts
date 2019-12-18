import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Message } from '../message';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-discussion-board',
  templateUrl: './user-discussion-board.component.html',
  styleUrls: ['./user-discussion-board.component.css']
})
export class UserDiscussionBoardComponent implements OnInit {

  constructor(public userService: UserService) {
    this.userService.getResponseData().subscribe((data) => {
      console.log(data.discussionBoardBeanList);
      this.messages = data.discussionBoardBeanList;
    });
  }

  messages: [];



  sendMessageToAdmin(form: NgForm) {
    console.log(form.value);
    this.userService.sendMessageToAdmin(form.value).subscribe(res => {
      console.log(res);

    },
      err => {
        console.log(err);
      });
  }
  ngOnInit() {
  }

}
