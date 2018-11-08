import emailPreview from './email-preview.cmp.js'


export default {
    props: ['emails'],
    template: `
    <div class = "emial-list-container">
     <ul class='email-list'>
        <input class = "mail-search" type="search" placeholder = "search" v-model="filter.by" @input="emitFilter">
        <li v-for = "email in emails">
             <email-preview :email = "email" @delete-email="deleteEmail"></email-preview>
        </li>
    </ul>
    </div>
    `,

    data() {
        return {
            filter: { by: '' }
        }
    },

    methods: {
        deleteEmail(emailId) {
            this.$emit('delete-email', emailId)
        },

        emitFilter() {
            this.$emit('filter-emails', this.filter)
        }
    },

    components: {
        emailPreview,
    }
}