import { Ui } from "./ui.js";
import {story} from "./story.js";
import {Character} from "./character";



const ui = new Ui();
ui.setCharacterinfo();

function loadScene(scene){
    ui.renderScene(scene);
}

// loadScene(story.start);