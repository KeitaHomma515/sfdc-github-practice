import { LightningElement, api, wire } from 'lwc';
import getContactsByAccountId from '@salesforce/apex/ContactController.getContactsByAccountId';

const COLUMNS = [
    { label: '名前', fieldName: 'Name' },
    { label: '役職', fieldName: 'Title' },
    { label: 'メール', fieldName: 'Email', type: 'email' }
];

export default class ContactList extends LightningElement {
    @api recordId;
    columns = COLUMNS;

    @wire(getContactsByAccountId, { accountId: '$recordId' })
    contacts;

    get hasContacts() {
        return this.contacts.data && this.contacts.data.length > 0;
    }
}
