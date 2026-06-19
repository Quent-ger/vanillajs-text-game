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
        this.choicesDiv.addEventListener("click", e => {
            if (e.target.classList.contains("choice-btn")){
             
                const nextScene = story[e.target.dataset.nextId]

                this.renderScene(nextScene)

            }
        })


        // Form
        this.form = document.querySelector("#game-form");
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
        });

        // Typewriter effect
        this.skipTextAnimation = document.querySelector('.skip-effect');
        this.timeoutIds  = [];


        this.setPlayerName();

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

    setCharacterinfo(character){
        this.characterName.innerText = `${character.lastName} ${character.firstName}`;
        this.currentScore.innerText = `${character.score}`;
        this.currentStatus.innerText = character.setStatus();
        this.currentStatus.innerText = character.getStatus();
        // this.characterDesc.innerText = character.
    }

    renderScene(scene) {
        
        this.scene.textContent = "";

        this.choicesDiv.textContent ="";

        const newButtons = [];

        if(scene.choices.length > 0){

            scene.choices.forEach(element => {
                const choiceButton = document.createElement("button");
                choiceButton.classList.add("choice-btn");
                choiceButton.textContent = element.text;
                choiceButton.dataset.nextId = element.next;
                choiceButton.disabled = true;
                this.choicesDiv.appendChild(choiceButton);
                newButtons.push(choiceButton);
            });

        } 

        this.textEffect(scene.text);
        // this.scene.innerText = scene.text;

        newButtons.forEach(button => button.disabled = false);
        

    }

    textEffect(sceneText){

        this.cancelTypewriter();
      
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            this.scene.textContent = sceneText;
        } else {
            const chars = [...sceneText];
     
            chars.forEach((char, index) => 
                {
                const timeoutId = setTimeout( () => this.displayChar(char),index * 50);
                this.timeoutIds.push(timeoutId);
                }
            )
        }

        this.skipTextAnimation.addEventListener("click", () => {
            this.cancelTypewriter();
            this.scene.textContent = "";
            setTimeout(() => this.scene.textContent = sceneText, 30);
        }
    )

    
    }

    cancelTypewriter(){
        this.timeoutIds.forEach(id => clearTimeout(id));

    }

    displayChar(char){
        this.scene.textContent += char;
    }

    

}

