export class AuthService{
  private username = '1';
  private password = '1';
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

  isLoggedIn():boolean{
    if(this.status >= 1){
      return true;
    }else{
      return false;
    }
  }

  testStarted(){
    this.status = 2;
  }

  isAuthenticated(){
    if(this.status === 2){
      return true;
    }else{
      return false;
    }
  }



}

