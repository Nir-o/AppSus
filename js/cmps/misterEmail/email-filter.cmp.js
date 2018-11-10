

export default {
    template: `
         <input class = "mail-search" type="search" placeholder = "search" v-model="filter.by" @input="emitFilter"> 
    `,

    data() {
        return {
            filter: { by: '' }
        }
    },

    methods: {
        emitFilter() {
            this.$emit('filter-emails', this.filter)
        },
    }
}