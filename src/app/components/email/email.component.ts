import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailbackenedService } from 'src/app/services/emailbackened.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

data ={
to:"",
subject:"",
message:""
}
   
  flag =false;
  constructor(private email:EmailbackenedService,private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  doSubmitForm(){
    // console.log("try to submit the form");
    console.log("Data",this.data);

    if(this.data.to ==''|| this.data.message =='' || this.data.subject ==''){
      this.snack.open("Fields cannot be empty","OK");
      return ;
    }

    this.flag=true;
    this.email.sendEmail(this.data).subscribe(
      response=>{
        console.log(response);
        this.flag=false;
        this.snack.open("send success","OK");
      },
      error =>{
       console.log(error);
       this.flag=false;
       this.snack.open("Resolve Error","OK");
      }
      
    )
  }

}
