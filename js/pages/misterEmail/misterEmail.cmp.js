import misterEmailService from '../../services/misterEmail.service.js'
import emailList from '../../cmps/misterEmail/email-list.cmp.js'


export default {
    template: `
        <section class = "misterEmail">
            <header class = "mister-email-header">
                <h1>misterEmail</h1>
            </header>
            <email-list v-if="!selectedEmail.isSelected" @selectedEmail="selectEmail" :emails="emails"></email-list>
        </section>
    `,

    data() {
        return {
            emails: [],
            selectedEmail: false,
        }
    },

    created() {
        misterEmailService.query()
            .then(emails => this.emails = emails)
    },

    methods: {
        selectEmail(emailId) {
            // console.log(bookId);
            this.selectedEmail = this.emails.find(email => email.id === emailId);
            this.email.isSelected = true;
            console.log('selectedBook', this.selectedEmail);
        },
    },

components: {
    emailList,
    }
}