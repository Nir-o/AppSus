// import noteToolbar from './note-toolbar.cmp.js';
import missKeeperService from '../../services/missKeeper.service.js'
import utilService from '../../services/util.service.js'


export default {
    // props: ['note'],
    template: `
        <div class="create-edit-container" :style="{ backgroundColor: bgColor}">
            <div class="create-note">
                <h1>Creat a new note</h1>
                <input class="create-title" type="text" v-model="title" placeholder="Title">
                <input class="create-body" type="text" v-model="body" placeholder="Take a note...">
            </div>
            <div class="toolbar-container">
                <input class="color-picker" v-model="bgColor" type="color" name="favcolor" value="#ff0000">
                <button type="button" @click="">upload img</button>
                <button type="button" @click="">pin note</button>
                <button type="button" @click="">delete note</button>
                <button type="button" @click="createNewNote">create note</button>
            </div>
        </div>
    `,
    data() {
        return {
            myColor: "blue",
            title: '',
            body: '',
            bgColor: "#afeeee",
            img: '',
            pinned: false,
        }
    },
    created() {
         const noteId  = this.$route.params.noteId;
        if (noteId) {
            missKeeperService.getById(noteId)
            .then(note =>{
                this.note = note
            })
        }
    },

    methods: {
        createNewNote() {
            var noteObj = {
                title: this.title,
                body: this.body,
                img: this.img,
                bgColor: this.bgColor,
                pinned: this.pinned,
                created: new Date(),
                id: utilService.makeId(),
            };
            missKeeperService.createNote(noteObj)
        }
    },
    components: {
        missKeeperService,

    }
}