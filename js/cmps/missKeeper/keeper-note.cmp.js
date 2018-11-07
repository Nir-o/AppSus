'use strict'
import missKeeperService from '../../services/missKeeper.service.js'
import noteToolbar from './note-toolbar.cmp.js';


export default {
    props: ['note'],
    template: `
        <li class="note">
            <img v-if="note.img" :src="note.img"/>
            <h3>{{note.title}}</h3>
            <h4>{{note.body}}</h4>
            <h4>Created: {{note.created}}</h4>
            <note-toolbar :note="note"></note-toolbar>
        </li>
    `,
    data() {
        return {
            notes: []
        }
    },
   
    methods: {
        setFilter(filter) {
            missKeeperService.query(filter)
            .then(notes => this.notes = notes)
        }
    },
    
    components: {
        missKeeperService,
        noteToolbar,

    },
   
};