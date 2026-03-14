import { Character } from "./character.js";
import { story } from "./story.js";

export class Ui {


    constructor(){

        // Character info
        this.characterName = document.querySelector(".character-name");
        this.currentStatus = document.querySelector("#current-status");
        this.currentScore = document.querySelector("#current-score");
        this.characterDesc = document.querySelector("#character-description");

        // Player info
        this.playerNameInput = document.querySelector("#player-name");
        this.playerNameDisplay = document.querySelector(".display-player-name");

        // Scene and choices
        this.scene = document.querySelector("#scene");
        this.choicesDiv = document.querySelector("#choices");

        // Form
        this.form = document.querySelector("#game-form");
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        this.setPlayerName();

        this.setCharacterinfo();

        this.testStartScene();
    }

   setPlayerName(){
    this.playerNameDisplay.innerText = "";

    this.playerNameInput.addEventListener("keydown", (e)=> {
        if(e.key==="Enter") {
            this.playerNameDisplay.innerText = this.playerNameInput.value;
            this.playerNameInput.setAttribute("disabled", true);
            this.playerNameInput.classList.add("hide");
        }
    });

    }

    setCharacterinfo(){
        const character = new Character("Test","Giorgio");
        this.characterName.innerText = `${character.lastName} ${character.firstName}`;
        this.currentScore.innerText = `${character.score}`;
        this.currentStatus.innerText = character.setStatus();
        this.currentStatus.innerText = character.getStatus();

    }

    testStartScene(){
        this.scene.innerText = "";
        this.scene.innerText = story.start.text;

        const currentChoicesArray = Array.from(Object.values(story.start.choices));
        console.log(currentChoicesArray);
        currentChoicesArray.forEach((element) =>{
            let 
        } )


    }

    

}

