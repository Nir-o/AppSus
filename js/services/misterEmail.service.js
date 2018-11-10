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
        body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non deserunt optio repellat consequuntur sed ipsum quia quae. Rerum aliquam voluptatibus, numquam, atque, suscipit molestias animi laborum corporis nesciunt quisquam saepe!",
        isRead: true,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    },
    {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
        isRead: false,
        sentAt: Date.now()
    }, {
        id: utilService.makeId(),
        from: utilService.makeId(10),
        subject: utilService.makeId(8),
        body: utilService.makeId(30),
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

function deleteEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            emails.splice(emailIdx, 1);
            return storageService.store(KEY, emails);
        })
}

function renderEmailsByFilter(filter = null, readMails = null, unReadMails = null) {
    let mailsToFilter;
    if (unReadMails) {
        mailsToFilter = Promise.resolve(unReadMails)
    } else if (readMails) {
        mailsToFilter = Promise.resolve(readMails)
    } else {
        mailsToFilter = storageService.load(KEY);
    }
    return mailsToFilter
        .then(emails => {
            if (!emails || !emails.length) {
                emails = createEmails();
                storageService.store(KEY, emails);
            }
            if (filter === null || filter.by === null) return emails;
            else {
                return emails.filter(email =>
                    email.subject.toUpperCase().includes(filter.by.toUpperCase()) ||
                    email.from.toUpperCase().includes(filter.by.toUpperCase()) ||
                    email.body.toUpperCase().includes(filter.by.toUpperCase())
                )
            }
        })
}

function getInBox() {
    return storageService.load(KEY)
}


function sendEmail(newEmail) {
    return storageService.load(KEY)
        .then(emails => {
            emails.unshift(newEmail)
            return storageService.store(KEY, emails);
        })
}


export default {
    query,
    getEmailById,
    deleteEmail,
    renderEmailsByFilter,
    getInBox,
    sendEmail,
    createEmails
}