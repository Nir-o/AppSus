import misterEmailService from '../../services/misterEmail.service.js';


export default {
    template: `
        <section class="email-details" v-if="email">
            <h1>{{email.subject}}</h1>
            <h4 class = "email-details-from">from: <span class = "from-details"> {{email.from}}</span></h4>
            <h5 class = "email-details-date">{{timeFormat(email.sentAt)}}</h5>
            <hr>
            <p>{{email.body}}</p>
        </section>
    
    `,
    data() {
        return {
            email: null,
        }
    },
    methods: {
        loadEmailData() {
            const emailId = this.$route.params.emailId;
            misterEmailService.getEmailById(emailId)
                .then(email => {
                    this.email = email
                })
        },
        timeFormat(time) {
            return moment(time).format("DD/MM/YYYY HH:MM")
        }
    },

    created() {
        this.loadEmailData();
    },



    watch: {
        '$route.params.emailId': function () {
            this.loadEmailData();
        }
    }

}