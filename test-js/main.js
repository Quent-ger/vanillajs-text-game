import { Ui } from "./ui.js";
import {story} from "./story.js";
import {Character} from "./character.js";

document.addEventListener('DOMContentLoaded', () =>{

     // game Initialization
    const characterBouncer = new Character("Girgio","Alfredo");

    const ui = new Ui();
    ui.setCharacterinfo(characterBouncer);

    function loadScene(scene){
    ui.renderScene(scene);
    }

    loadScene(story.start);
})

