import storageService from './storage.service.js'
// import utilService from './util.service.js'

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
        subject: "first email",
        body: "this is my first email",
        isRead: false,
        // sentAt: (timestamp)
    }]

}



export default {
    query,
}