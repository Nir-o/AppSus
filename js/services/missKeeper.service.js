import storageService from './storage.service.js';
import utilService from './util.service.js';

const KEY = 'missKeeperKey';

export default {
    query,
    createNote,
    getById,
    deleteNote,
    updateNote,
}

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
    return storageService.load(KEY)
        .then(notes => {
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

function deleteNote(noteObj) {
    return storageService.load(KEY)
        .then(notes => {
            var noteIdx = notes.findIndex(note => note.id === noteObj.id);
            notes.splice(noteIdx, 1);
            storageService.store(KEY, notes);
        })
}

function updateNote(noteObj) {
    return storageService.load(KEY)
        .then(notes => {
            var noteIdx = notes.findIndex(note => note.id === noteObj.id);
            notes.splice(noteIdx, 1, noteObj);
            storageService.store(KEY, notes);
        })
}

function createNotes() {
    var notesHc = [{
        title: "Note example",
        body: "This is a hard coded example for a note",
        img: false,
        bgColor: "white",
        isPinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Need to buy milk",
        body: "Wife's needs her coffee..",
        img: false,
        bgColor: "orange",
        isPinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "javascript loic",
        body: "1 + 1 = 11",
        img: false,
        bgColor: "yellow",
        isPinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "This note is pinned",
        body: "This is a hard coded example for a note",
        img: false,
        bgColor: "white",
        isPinned: true,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Need to buy milk",
        body: "Wife's needs her coffee..",
        img: false,
        bgColor: "orange",
        isPinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "javascript loic",
        body: "1 + 1 = 11",
        img: false,
        bgColor: "yellow",
        isPinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Note example",
        body: "This is a hard coded example for a note Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus consequuntur minima animi aut quidem placeat possimus cum porro accusantium non.",
        img: false,
        bgColor: "white",
        isPinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "Need to buy milk",
        body: "Wife's needs her coffee..",
        img: false,
        bgColor: "orange",
        isPinned: false,
        created: new Date(),
        id: utilService.makeId(),
    },
    {
        title: "expecting to be pinned",
        body: "But in a good way",
        img: false,
        bgColor: "yellow",
        isPinned: true,
        created: new Date(),
        id: utilService.makeId(),
    },

    ];
    return notesHc
}





