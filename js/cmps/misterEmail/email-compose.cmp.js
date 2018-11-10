import utilService from '../../services/util.service.js'

export default {
    template: `
        <section>
        <form class="email-send" @submit.prevent="sendEmail(email)">
            <input type="text" class="from-bar" v-model="email.from" placeholder="from:" >
            <input type="text" class="subject-bar" v-model="email.subject" placeholder="subject:">
            <textarea class="body-text" v-model="email.body" cols="30" rows="10"></textarea>
            <!-- <a class="fas fa-paper-plane" @click =" goToCompose()"></a> -->
            <button class="fas fa-paper-plane send-btn" type="submit">send</button>
        </form>
        </section>
    
    `,
    data() {
        return {
            email: {
                id: '',
                from: '',
                subject: '',
                body: '',
                isRead: false,
                sentAt: Date.now()

            },
        }
    },

    methods: {
        sendEmail(newEmail) {
            this.email.id = utilService.makeId();
            this.email.isRead = false;
            this.email.sentAt = Date.now();
            this.$emit('send-email', newEmail)
            this.$router.push('/misterEmail')
        },
    },
}