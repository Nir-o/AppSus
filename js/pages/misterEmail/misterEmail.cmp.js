import misterEmailService from '../../services/misterEmail.service.js'
import emailList from '../../cmps/misterEmail/email-list.cmp.js'
import emailDetails from '../../cmps/misterEmail/email-details.cmp.js'


export default {
    template: `
        <section class = "misterEmail" >
            <header class = "mister-email-header">
                <h1>misterEmail</h1>
            </header>
            
            <div class = "mail-container">
                <div class="mail-features" >
                    <a class="fas fa-inbox" @click = "showInBox()"></a>
                    <a class="fas fa-envelope-open"   @click="showReadEmails()"></a>
                    <a class="fas fa-envelope" @click="showUnReadEmails()"></a>
                 </div>
                 <email-list :emails="emails" @delete-email="deleteEmail" @filter-emails="setFilter"></email-list>
                 <router-view ></router-view>
            </div>
        </section>
    `,

    data() {
        return {
            emails: null,
            filter: null,
            readEmails: null,
            unReadEmails: null
        }
    },

    created() {
        misterEmailService.query()
            .then(emails => this.emails = emails)
    },

    methods: {
        setFilter(filter) {
            this.filter = { ...filter };
            misterEmailService.renderEmailsByFilter(this.filter, this.readEmails, this.unReadEmails)
                .then(emails => (this.emails = emails));
        },

        deleteEmail(emailId) {
            this.emails = this.emails.filter(email => {
                return email.id !== emailId;
            });
            misterEmailService.deleteEmail(emailId);
        },
        showReadEmails() {
            this.emails = this.readEmails = this.emails.filter(mail => mail.isRead);
        },
        showUnReadEmails() {
            this.emails = this.unReadEmails = this.emails.filter(mail => (!mail.isRead));
        },
        showInBox() {
            this.emails = misterEmailService.query()
                .then(emails => (this.emails = emails));
        }
    },


    components: {
        emailList,
        emailDetails
    }
}