// import noteToolbar from './note-toolbar.cmp.js';
import missKeeperService from '../../services/missKeeper.service.js'
import utilService from '../../services/util.service.js'


export default {
    // props: ['note'],
    template: `
    <div>
        <div v-bind:class="getClass()" id="back-to-list">
            <router-link class="link" to="/missKeeper">Back to notes list</router-link>
        </div>
        <div class="create-edit-container" :style="{ backgroundColor: note.bgColor}">
            <div class="create-note">
                <h1>Create a new note</h1>
                <input class="create-title" type="text" v-model="note.title" placeholder="Title">
                <input class="create-body" type="text" v-model="note.body" placeholder="Take a note...">
            </div>
            <div class="toolbar-container">
                <input class="color-picker" v-model="note.bgColor" type="color" name="favcolor" value="#ff0000">
                <button type="button" @click="">upload img</button>
                <button class="fas fa-thumbtack" type="button" @click="togglePin" title="pin"></button>
                    <button class="fas fa-trash-alt" type="button" @click="deleteNote" title="Delete"></button>
                    <button type="button" @click="createNewNote">create note</button>
                    <button type="button" @click="updateNote">Update note</button>
            </div>
        </div>
    </div>
    `,
    data() {
        return {
            note: {
                title: '',
                body: '',
                bgColor: "#afeeee",
                img: '',
                isPinned: false,
            }
        }
    },
    created() {
        const noteId = this.$route.params.noteId;
        if (noteId) {
            missKeeperService.getById(noteId)
                .then(note => {
                    console.log('note', note);

                    this.note = note
                })
        }
    },

    methods: {
        createNewNote() {
            var noteObj = {
                title: this.note.title,
                body: this.note.body,
                img: this.note.img,
                bgColor: this.note.bgColor,
                isPinned: this.note.isPinned,
                created: missKeeperService.timeNow(),
                id: utilService.makeId(),
            };
            missKeeperService.createNote(noteObj)
                .then(() => {
                    this.$emit('update')
                })
        },
        togglePin() {
            this.note.isPinned = !this.note.isPinned
            console.log('isPinned ', this.note.isPinned);
            missKeeperService.updateNote(this.note)
                .then(() => {
                    this.$emit('update')
                })
        },
        deleteNote() {
            missKeeperService.deleteNote(this.note)
                .then(() => {
                    this.$emit('update')
                })
                .then(() => {
                    this.$router.push('/missKeeper');
                })
        },
        updateNote() {
            missKeeperService.updateNote(this.note)
                .then(() => {
                    this.$emit('update')
                })
                .then(() => {
                    this.$router.push('/missKeeper');
                })
        },
        getClass() {
            var classToGive = (this.note.id)? 'back-to-list' : 'hidden' 
            return classToGive
            
        }

    },
    computed: {
    },

    components: {
        missKeeperService,

    }
}





    
