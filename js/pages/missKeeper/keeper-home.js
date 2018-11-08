'use strict';

import keeperHeader from '../../cmps/missKeeper/keeper-header.cmp.js';
import keeperCreateEdit from '../../cmps/missKeeper/keeper-createEdit.cmp.js';
import keeperNote from '../../cmps/missKeeper/keeper-note.cmp.js';
import keeperService from '../../services/misskeeper.service.js';
import notesList from '../../cmps/missKeeper/notes-list.cmp.js';

export default {
    name: 'keeper-home',
    template: `
        <section class="keeper-home">
            <h1>MissKeeper</h1>
            <keeper-header @set-filter="setFilter"></keeper-header>
            <keeper-createEdit></keeper-createEdit> 
            <notes-list :notes="pinnedNotes"></notes-list>
            <notes-list :notes="upinnedNotes"></notes-list>

                <!-- <div class="note-list">
                    <ul v-for="note in notes">
                        <keeper-note :notes="notes"></keeper-note>
                    </ul> 
                </div> -->
        </section>
    `,
    data() {
        return {
            notes: [],
    
        }
    },
    created() {
        keeperService.query()
            .then(notes => this.notes = notes)
            console.log('notes list created ', this.notes);
            
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.note;
            return this.books
                .filter(note => note.title.includes(this.filterBy.title))
        },
        pinnedNotes() {
            return this.notes.filter(note => note.pinned);
        },
        upinnedNotes() {
            return this.notes.filter(note => !note.pinned);
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy = Object.assign({}, filter);
        },
    },
    components: {
        keeperHeader,
        keeperCreateEdit,
        keeperNote,
        keeperService,
        notesList
    }

}



