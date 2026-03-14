export const story = {
    start: {
        text:"This is the beginning of the story.",
        choices: [
            {key: "a", text:"some choice", next:"start-2"},
            {key: "b", text:"another choice", next:"start-2"},
            {key: "c", text:"some other choice", next:"start-2"},
            
        ]

    }
}