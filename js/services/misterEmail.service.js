import storageService from './storage.service.js'
import utilService from './util.service.js'

const KEY = 'misterEmailKey';


function query() {
    return storageService.load(KEY)
        .then(emails => {
            if (!emails || !emails.length) {
                emails = createEmails();
                storageService.store(KEY, emails);
            }
            console.log('Emails: ', emails);
            return emails;
        })
}


function createEmails() {
    return [{
        id: utilService.makeId(),
        from: 'Kasim gadban',
        subject: "first email",
        body: "this is my first email",
        isRead: false,
        sentAt: Date.now()
    },

    {
        id: utilService.makeId(),
        from: 'Nir tal',
        subject: "second email",
        body: "this is my second email",
        isRead: true, 
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: 'Kasim gadban',
        subject: "first email",
        body: "this is my first email",
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: 'Kasim gadban',
        subject: "first email",
        body: "this is my first email",
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: 'Kasim gadban',
        subject: "first email",
        body: "this is my first email",
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: 'Kasim gadban',
        subject: "first email",
        body: "this is my first email",
        isRead: false,
        sentAt: Date.now()
    },
]

}

function getEmailById(emailId) {
    return storageService.load(KEY)
        .then(mails => {
           return mails.find(email => email.id === emailId);   
        })
}



export default {
    query,
    getEmailById,
}