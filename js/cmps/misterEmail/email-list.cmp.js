import emailPreview from './email-preview.cmp.js'
import emailDetailsCmp from './email-details.cmp.js';
export default {
    props: ['emails'],
    template: `
     <ul class='email-list'>
        <li v-for = "email in emails">
            <email-preview :email = "email" @click.native = "openEmail" ></email-preview>
        </li>
    </ul>
    `, 
    methods: {
        openEmail(){
            
        }
    },

    components:{
        emailPreview,
    }
}