import noteToolbar from './note-toolbar.cmp.js';

export default {
    props: ['note'],
    template: `
        <div class="create-note">
            <h1>Creat a new note</h1>
        <input class="create-title" type="text" v-model="title" placeholder="Title">
        <input class="create-body" type="text" v-model="body" placeholder="Take a note...">
        <note-toolbar></note-toolbar>

    </div>
    `,
    data() {
        return {
            note: {
            title: '',
            body: '',
            }
        }
    },
    components: {
        noteToolbar,
    }
}