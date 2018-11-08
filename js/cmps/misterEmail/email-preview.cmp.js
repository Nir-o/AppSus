// import emailDetailsCmp from "./email-details.cmp";


export default {
    props: ['email'],
    template: `
        <section :class = " email.isRead ? 'email-preview-read' : 'email-preview'" >
        <router-link :to="mailRoute"> 
            <div class = "email-preview-items">
                <h4 class = "sender-name">📧 {{email.from}}</h4>
                <h5 class = "email-subject">{{email.subject}}</h5>
            </div>
        </router-link> 
        </section>
    `,
    computed:{
        mailRoute(){
            return `/misterEmail/${this.email.id}`
        },
    },
}