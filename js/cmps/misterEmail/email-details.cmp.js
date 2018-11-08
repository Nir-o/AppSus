import misterEmailService from '../../services/misterEmail.service.js';


export default {
    template: `
        <section class="email-details" v-if="email">
            <h1>{{email.subject}}</h1>
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
                    // this.$router.push(`/misterEmail/${emailId}`)
                })
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