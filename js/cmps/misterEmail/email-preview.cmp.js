import eventBus from '../../event-bus.js'


export default {
    props: ['email'],
    template: `
        <section :class = " email.isRead ? 'email-preview-read' : 'email-preview'" >
            <a :class = "[email.isRead ? 'fa-envelope-open' : 'fa-envelope', 'far read-Unread-delete-btns']" @click.prevent = "markReadUnRead"></a>
            <a class = "far fa-trash-alt read-Unread-delete-btns" @click.prevent="deleteEmail(email.id)"></a>
        <router-link :to="mailRoute" @click.native = "mailRead"> 
            <div class = "email-preview-items">
                <h4 class = "sender-name"><i class="fas fa-envelope"></i> {{email.from}}</h4>
                <h5 class = "email-subject">{{email.subject}}</h5>
            </div>
        </router-link> 
        </section>
    `,
    computed: {
        mailRoute() {
            return `/misterEmail/${this.email.id}`
        },
    },
    methods: {
        mailRead() {
            if (!this.email.isRead)
                eventBus.$emit('unReadCount', -1);
            this.email.isRead = true;
        },
        markReadUnRead() {
            if (this.email.isRead) {
                this.email.isRead = false;
                eventBus.$emit('unReadCount', 1);
            } else {
                this.email.isRead = true;
                eventBus.$emit('unReadCount', -1);
            }
        },
        deleteEmail(emailId) {
            this.$emit('delete-email', emailId)
        },
    },
}
