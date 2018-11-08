import emailPreview from './email-preview.cmp.js'


export default {
    props: ['emails'],
    template: `
     <ul class='email-list'>
        <input class = "mail-search" type="search" placeholder = "search">
        <li v-for = "email in emails">
             <email-preview :email = "email"></email-preview>
        </li>
    </ul>
    `,


    methods: {

    },

    components: {
        emailPreview,
    }
}