class bootlegcookie{
    
    constructor(){
        this.username = '';
        this.type = '';
    }

    set(username, type){
        this.username = username;
        this.type = type;
    }

    setfirstname(firstname){
        this.firstname = firstname;
    }
    
    clearconstructor(){
        this.username = '';
        this.type = '';
        this.firstname = '';
    }
}

module.exports = bootlegcookie;