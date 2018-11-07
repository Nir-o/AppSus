import misterEmailService from '../../services/misterEmail.service.js'



export default {
    template: `
        <section class = "misterEmail">
            <header>
                <h1>misterEmail</h1>
            </header>
            <h2 v-for = "email in emails">{{email.subject}}</h2>
        </section>
    `,

data() {
    return {
        emails: [],
    }
},

    created() {
        misterEmailService.query()
            .then(emails => this.emails = emails)
            // console.log(emails); 
    },
}