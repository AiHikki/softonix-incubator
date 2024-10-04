import type { RouteRecordRaw } from 'vue-router'
import Contacts from '@/views/contacts/Contacts.vue'
import UpsertContact from '@/views/contacts/UpsertContact.vue'

const contactsRoutesNames = {
  contacts: 'contacts',
  upsertContact: 'upsertContact'
}

const contactsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/contacts',
    name: contactsRoutesNames.contacts,
    component: Contacts
  },
  {
    path: '/contacts/:contactId',
    name: contactsRoutesNames.upsertContact,
    component: UpsertContact,
    beforeEnter (to, from, next) {
      const { contacts } = useContactsStore()
      if (to.params.contactId === 'new' || contacts.find(c => c.id === +to.params.contactId)) {
        next()
      } else {
        next({ name: contactsRoutesNames.contacts })
      }
    }
  }
]

export {
  contactsRoutesNames,
  contactsRoutes
}
