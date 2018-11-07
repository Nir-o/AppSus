'use strict';

import keeperHeader from '../../cmps/missKeeper/keeper-header.cmp.js';
import keeperCreate from '../../cmps/missKeeper/keeper-create.cmp.js';
import keeperNote from '../../cmps/missKeeper/keeper-note.cmp.js';
import keeperService from '../../services/misskeeper.service.js';

export default {
    name: 'keeper-home',
    template: `
        <section class="keeper-home">
            <h1>MissKeeper</h1>
            <keeper-header @set-filter="setFilter"></keeper-header>
             <keeper-create></keeper-create> 
                <div class="note-list">
                    <ul v-for="note in notes">
                        <keeper-note :note="note"></keeper-note>
                    </ul> 
                </div>
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
    },
    computed: {
        notesToShow() {
            if (!this.filterBy) return this.note;
            return this.books
                .filter(note => note.title.includes(this.filterBy.title))
        }
    },
    methods: {
        setFilter(filter) {
            this.filterBy = Object.assign({}, filter);
        },
    },
    components: {
        keeperHeader,
        keeperCreate,
        keeperNote,
        keeperService,
    }

}



