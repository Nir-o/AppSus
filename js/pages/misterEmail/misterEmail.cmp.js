import misterEmailService from '../../services/misterEmail.service.js'
import emailList from '../../cmps/misterEmail/email-list.cmp.js'
import emailDetails from '../../cmps/misterEmail/email-details.cmp.js'


export default {
    template: `
        <section class = "misterEmail">
            <header class = "mister-email-header">
                <h1>misterEmail</h1>
            </header>
            <!-- <keep-alive></keep-alive> -->
            <button @click = "filterReadUnread">Read</button>
            <button @click = "filterReadUnread">UnRead</button>
            <email-list :emails="emails"></email-list>
        </section>
    `,

    data() {
        return {
            emails: [],
            selectedEmail: {},
        }
    },

    created() {
        misterEmailService.query()
            .then(emails => this.emails = emails)
    },

    methods: {
        selectEmail(emailId) {
            this.selectedEmail = this.emails.find(email => email.id === emailId);
            this.email.isSelected = true;
            console.log('selectedBook', this.selectedEmail);
        },

        filterReadUnread(){}
    },

components: {
    emailList,
    emailDetails
    }
}