import misterEmailService from '../../services/misterEmail.service.js'
import emailList from '../../cmps/misterEmail/email-list.cmp.js'
import emailDetails from '../../cmps/misterEmail/email-details.cmp.js'


export default {
    template: `
        <section class = "misterEmail">
            <header class = "mister-email-header">
                <h1>misterEmail</h1>
            </header>
            
            <div class = "mail-container">
                <div class="mail-features">
                    <button>inbox</button>
                    <button>Read</button>
                    <button>UnRead</button>
                    <input type="search">
                 </div>
                 <email-list :emails="emails"></email-list>
                 <router-view></router-view>
            </div>
        </section>
    `,

    data() {
        return {
            emails: null,
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
            console.log('selectedEmail', this.selectedEmail);
        },


    },


    components: {
        emailList,
        emailDetails
    }
}