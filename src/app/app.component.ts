import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todoList : any = [];
  doneList : any = [];
  mobile : any = false;
  clickOnSideNav : any = true;
  ngOnInit()
  {
    for(let i=0;i<5;i++)
    {
      let todolistArraVal = {
        "description":"Lorem ipsum dolor sit amet",
        "selected" : false,
        "editmode" : false,
        "createmode": false
      }
      this.todoList.push(todolistArraVal);  
    }   
    for(let i=0;i<1;i++)
    {      
      let donelistArraVal = {
        "description":"Lorem ipsum dolor sit amet",
        "selected" : true,
      }
      this.doneList.push(donelistArraVal);
    } 
  }

  addNewTodo()
  {
     let todolistArraVal = {
      "description":"",
      "selected" : false,
      "editmode" : false,
      "createmode": true
    }
    this.todoList.unshift(todolistArraVal);
  }

  openeditMode(index)
  {
    this.todoList[index].editmode = true;
    this.todoList[index].createmode = false;
  }

  editRow(index)
  {
    this.todoList[index].createmode = true;
    this.todoList[index].editmode = false;
  }

  openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    this.clickOnSideNav = false;
  }
  
  closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
    this.clickOnSideNav = true;
  }

  changedevice()
  {
    this.mobile = !this.mobile;  
    if(this.mobile)
    this.clickOnSideNav = true;         
  }

  deleteRow(index)
  {
    this.todoList.splice(index, 1);
  }

  submitRowdata(index,description)
  {
    let donelistArraVal = {
      "description":description,
      "selected" : true,
    }
    this.doneList.push(donelistArraVal);
    this.todoList.splice(index, 1);
  }
}


