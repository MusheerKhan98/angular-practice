import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreated = 'No server was created';
  serverName = ' ';
  serverCreatedStatus = false;
  servers = ['testServer', 'testServer2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
  onServerCreation() {
    this.serverCreatedStatus = true;
    this.servers.push(this.serverName);
    this.serverCreated = 'New Server Created with name ' + this.serverName;
  }
  // onServerUpdation(event: any) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
