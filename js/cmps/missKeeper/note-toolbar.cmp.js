import missKeeperService from '../../services/missKeeper.service.js'

export default {
   //todo- change the toolbar to $emit comands instead of recieving props ad rendering
    //  props: ['note'],
    template: `
        <div class="toolbar-container">
            <button type="button" @click="">bg color</button>
            <button type="button" @click="">upload img</button>
            <button type="button" @click="">pin note</button>
            <button type="button" @click="">delete note</button>
            <button type="button" @click="createNewNote">create note</button>
        </div>
    `,
    // data() {
    //     return {
    //         title: '',
    //         body: '',
    //         bgColor: "white",
    //         img: '',
    //         pinned: false,
    //     }
    // },
    // created() {
    //     console.log('this.note', this.note);
        
    //     this.title = this.note.title;
    //     this.body = this.note.body;

    // },
    methods: {
        createNewNote() {
            var noteObj = {
                title: this.title,
                body: this.body,
                img: this.img,
                bgColor: this.bgColor,
                pinned: this.pinned,
                created: new Date(),
            };
            missKeeperService.createNote(noteObj)
        }
    },
    components: {
        missKeeperService,
    }

}