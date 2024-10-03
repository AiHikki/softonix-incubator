import type { RouteRecordRaw } from 'vue-router'
import Contacts from '@/views/contacts/Contacts.vue'
import UpsertContact from '@/views/contacts/UpsertContact.vue'
import CardView from '@/views/contacts/components/CardView.vue'
import TableView from '@/views/contacts/components/TableView.vue'

const contactsRoutesNames = {
  contacts: 'contacts',
  upsertContact: 'upsertContact',
  contactsTableView: 'contactsTableView',
  contactsCardView: 'contactsCardView'
}

const contactsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/contacts',
    name: contactsRoutesNames.contacts,
    component: Contacts,
    children: [
      { path: 'card-view', name: contactsRoutesNames.contactsCardView, component: CardView },
      { path: 'table-view', name: contactsRoutesNames.contactsTableView, component: TableView }
    ]
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
        next({ name: contactsRoutesNames.contactsCardView })
      }
    }
  }
]

export {
  contactsRoutesNames,
  contactsRoutes
}
