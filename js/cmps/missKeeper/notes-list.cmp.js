import keeperNote from '../../cmps/missKeeper/keeper-note.cmp.js';


export default {
  name: 'note-list',
  props: ['notes'],
  template: `
      <section class="note-list">
          <ul v-for="note in notes">
            <keeper-note :note="note"></keeper-note>
          </ul > 

    </section>
        `,
  data() {
    return {
    }
  },
  components:{
    keeperNote,
  }
}








