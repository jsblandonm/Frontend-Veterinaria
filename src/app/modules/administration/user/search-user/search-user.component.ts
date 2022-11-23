import { Component, OnInit } from '@angular/core';
import { ModelUser } from 'src/app/model/datos.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  ListRegisters : ModelUser[] = [];

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.GetListUser();
  }

  GetListUser(){
    this.userService.GetRegisters().subscribe((datos : ModelUser[]) => {
      this.ListRegisters = datos;
    })
  }

}
