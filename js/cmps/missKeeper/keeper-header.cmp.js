
export default {
    name: 'keeper-header',
    template:`
    <section class="keeper-header">
         <div class="far fa-paper-plane logo"></div>   
        <input class="search-txt" type="text" v-model="filter.byTitle" @input="emitFilter" placeholder="Search Note " />
        <!-- <select v-model="filter.byType" @change="emitFilter" class="search">
            <option value="">All</option>
            <option>Text</option>
            <option>Todo</option>
    </select> -->
    </section>
    `,
    data() {
        return {
            filter: {
                byTitle: '',
                byType: ''
            }
        }
    },
   
    methods: {
        emitFilter() {
            this.$emit('filtered', {...this.filter})
        }
    },
    
}


