import storageService from './storage.service.js'

const KEY = 'missKeeperKey';


function query() {
    return storageService.load(KEY)
        .then(notes => {
            if (!notes || !notes.length) {
                notes = createNotes();
                storageService.store(KEY, notes);
            }
            console.log('Notes: ', notes);
            return notes;
        })
}


function createNotes() {
    var notesHc = [{
        title: "Note example",
        body: "This is a hard coded example for a note",
        img: false,
        bgColor: "white",
        created: new Date(),
    },
    {
        title: "Need to buy milk",
        body: "Wife's needs her coffee..",
        img: false,
        bgColor: "orange",
        created: new Date(),
    },
    {
        title: "javascript loic",
        body: "1 + 1 = 11",
        img: false,
        bgColor: "yellow",
        created: new Date(),
    },
    
    ];
    return notesHc
}



export default {
    query,
}

