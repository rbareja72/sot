export class AuthService{
  private username = '16701';
  private password = 'qwerty';
  private status = 0; //untouched

  login(username: string, password: string): number {
    if (this.username === username && this.password === password){
      this.status = 1;
    } else if (this.username === username){
      this.status = -1; //wrong password
    } else {
      this.status = -2;// both wrong
    }
    return this.status;
  }

  logout(){
    this.status = 0;
  }

  isAuthenticated():boolean{
    if(this.status === 1){
      return true;
    }else{
      return false;
    }
  }

}

