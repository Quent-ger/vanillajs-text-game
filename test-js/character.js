export class Character{

    constructor(firstName, lastName, score = "50"){
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = score;
        this.relation = "Neutral";
    }

    setStatus(score){

        if (score == "") {
            score = this.score;
        }
       
        if(score>70){
           this.relation = "Friendly";
        }
        else if (score<30) {
            this.relation = "Hostile";
        }
        else {
            this.relation = "Neutral";
        }
    }

    getStatus(){
        return this.relation;
    }

}