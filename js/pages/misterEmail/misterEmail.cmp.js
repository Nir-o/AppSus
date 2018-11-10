import misterEmailService from '../../services/misterEmail.service.js'
import emailList from '../../cmps/misterEmail/email-list.cmp.js'
import emailDetails from '../../cmps/misterEmail/email-details.cmp.js'
import eventBus from '../../event-bus.js'

export default {
    template: `
        <section class = "misterEmail" >
            <header class = "mister-email-header">
                <h1 >misterEmail</h1>
            </header>
            <div class = "mail-container">
                <div class="mail-features" >
                    <a class="fas fa-paper-plane" @click =" goToCompose()"></a>
                    <a class="fas fa-inbox" @click = "showInBox()"></a>
                    <a class="fas fa-envelope-open"   @click="showReadEmails()"></a>
                    <div class = "noti-div">
                        <a class="fas fa-envelope" @click="showUnReadEmails()"></a>
                        <div :class="[unReadCount === 0 ? 'fa-circle-hide' : 'fa-circle', 'fas']"><h1 class = "noti">{{unReadCount}}</h1></div>
                    </div>
                </div>
                <email-list :emails="emails" @delete-email="deleteEmail" @filter-emails="setFilter"></email-list>
                <router-view @send-email="sendEmail" ></router-view>
            </div>
        </section>
    `,


    data() {
        return {
            emails: null,
            filter: null,
            readEmails: null,
            unReadEmails: null,
            unReadCount: 0
        }
    },


    created() {
        misterEmailService.query()
            .then(emails => this.emails = emails)
        this.unReadCounter()
    },

    methods: {
        goToCompose() {
            this.$router.push(`/misterEmail/newEmail`);
        },
        setFilter(filter) {
            this.filter = { ...filter };
            misterEmailService.renderEmailsByFilter(this.filter, this.readEmails, this.unReadEmails)
                .then(emails => (this.emails = emails));
        },

        deleteEmail(emailId) {
            this.emails = this.emails.filter(email => {
                if (email.id === emailId && !email.isRead)
                    this.unReadCount--;
                return email.id !== emailId;
            });
            misterEmailService.deleteEmail(emailId)
            this.$router.push(`/misterEmail/`);
        },
        showReadEmails() {
            this.emails = this.readEmails = this.emails.filter(mail => mail.isRead);
        },
        showUnReadEmails() {
            this.emails = this.unReadEmails = this.emails.filter(mail => !(mail.isRead));
        },
        showInBox() {
            this.emails = misterEmailService.getInBox()
                .then(emails => (this.emails = emails));
        },
        unReadCounter() {
            this.unReadCount = 0;
            misterEmailService.getInBox()
                .then(emails => {
                    emails.forEach(email => {
                        if (!email.isRead) this.unReadCount++;
                    });
                });
        },
        sendEmail(newEmail) {
            this.emails.unshift(newEmail)
            misterEmailService.sendEmail(newEmail)
            this.$router.push('/misterEmail');
            this.unReadCount++;
        },

    },

    mounted() {
        eventBus.$on('unReadCount', data => {
            this.unReadCount += data;
        });
    },

    components: {
        emailList,
        emailDetails,
    }
}