
export default {
    name: 'keeper-header',
    template:`
    <section class="keeper-header">
         <div class="far fa-paper-plane logo"></div>   
        <input class="search-txt" type="text" v-model="filter.byTitle" @input="emitFilter" placeholder="Search Note " />
    </section>
    `,
    data() {
        return {
            filter: {byTitle: ''}
        }
    },
   
    methods: {
        emitFilter() {
            this.$emit('filtered', this.filter)
        },
       
    },
    
}


