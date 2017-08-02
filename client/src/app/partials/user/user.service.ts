import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private users: any[] = [

    { id: 1, nome: "Usuario 01", email: "jc.bombardelli@live.com" },
    { id: 2, nome: "Usuario 02", email: "jc@live.com" },
    { id: 3, nome: "Usuario 03", email: "bombardelli@live.com" }

  ];

  getAll() {
    return this.users;
  }


  constructor() { }

}
