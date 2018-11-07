

export default {
    props: ['email'],
    template: `
        <section class = "email-preview">
            <div class = "email-preview-items">
                <h4 class = "sender-name">📧 {{email.name}}</h4>
                <h5 class = "email-subject">{{email.subject}}</h5>
            </div>
        </section>
    `
}