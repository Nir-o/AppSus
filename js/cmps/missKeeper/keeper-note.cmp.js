'use strict'
import missKeeperService from '../../services/missKeeper.service.js'
// import noteToolbar from './note-toolbar.cmp.js';


export default {
    props: ['note'],
    template: `
    <router-link :to="'/missKeeper/'+note.id">
        <li class="note" :style="{ backgroundColor: note.bgColor}">
            <img v-if="note.img" :src="note.img"/>
            <h3>{{note.title}}</h3>
            <h4>{{note.body}}</h4>
            <h4>Created: {{note.created}}</h4>
        </li>
    </router-link>
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

    },
   
};