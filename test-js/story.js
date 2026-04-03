export const story = {
    start: {
        text:"This is the beginning of the story.",
        choices: [
            {key: "a", text:"some choice", next:"startB"},
            {key: "b", text:"another choice", next:"startB"},
            {key: "c", text:"some other choice", next:"startB"},
        ]
    },
    startB: {
        text:"Great! You've managed to reach a choice node.",
        choices: [
            {key: "a", text:"a fake choice to see", next:""}
        ]
    }
}