import storageService from './storage.service.js';
import utilService from './util.service.js';

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

function createNote(noteObj) {
    // var newNote = {
    //     title: noteObj.title,
    //     body: noteObj.body,
    //     img: noteObj.img,
    //     bgColor: noteObj.bgColor,
    //     pinned: false,
    //     created: new Date(),
    // };
    return storageService.load(KEY)
        .then(notes =>{
            notes.push(noteObj);
            storageService.store(KEY, notes);
            console.log('Notes: ', notes);
            return notes;
        })
}


function getById(noteId) {
    return storageService.load(KEY)
    .then(notes => {
        return notes.find(note => note.id === noteId);
    })
}



function createNotes() {
    var notesHc = [{
        title: "Note example",
        body: "This is a hard coded example for a note",
        img: false,
        bgColor: "white",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Need to buy milk",
        body: "Wife's needs her coffee..",
        img: false,
        bgColor: "orange",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "javascript loic",
        body: "1 + 1 = 11",
        img: false,
        bgColor: "yellow",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Note example",
        body: "This is a hard coded example for a note",
        img: false,
        bgColor: "white",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Need to buy milk",
        body: "Wife's needs her coffee..",
        img: false,
        bgColor: "orange",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "javascript loic",
        body: "1 + 1 = 11",
        img: false,
        bgColor: "yellow",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Note example",
        body: "This is a hard coded example for a note Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus consequuntur minima animi aut quidem placeat possimus cum porro accusantium non.",
        img: false,
        bgColor: "white",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Need to buy milk",
        body: "Wife's needs her coffee..",
        img: false,
        bgColor: "orange",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "javascript loic",
        body: "1 + 1 = 11",
        img: false,
        bgColor: "yellow",
        pinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    
    ];
    return notesHc
}



export default {
    query,
    createNote,
    getById,

}

