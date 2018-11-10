import emailPreview from './email-preview.cmp.js'
import emailFilter from './email-filter.cmp.js'


export default {
    props: ['emails'],
    template: `
    <div class = "emial-list-container" >
     <ul class='email-list'>
        <email-filter @filter-emails ='emitFilter' ></email-filter>
        <li v-for = "email in emails" >
             <email-preview  :email = "email" @delete-email="deleteEmail"></email-preview>
        </li>
    </ul>
    </div>
    `,
    methods: {
        deleteEmail(emailId) {
            this.$emit('delete-email', emailId)
        },

        emitFilter(filter) {
            this.$emit('filter-emails', filter)
        },
    },

    computed: {
        do() {
            this.emails.unshift(emails)
        }
    },

    components: {
        emailPreview,
        emailFilter,
    }
}