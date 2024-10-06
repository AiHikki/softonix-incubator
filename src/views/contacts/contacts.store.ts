export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])

  function getContacts () {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: Pick<IContact, 'name' | 'description'>) {
    contactsService.createContact(contact).then(() => {
      contactsService.getContacts()
        .then(res => {
          contacts.value = res
        })
    })
  }

  function updateContact (contact: IContact) {
    contactsService.updateContact(contact).then(() => {
      const index = contacts.value.findIndex(c => c.id === contact.id)
      contacts.value[index] = { ...contacts.value[index], ...contact }
    })
  }

  function deleteContact (contact: IContact) {
    contactsService.deleteContact(contact).then(() => {
      contacts.value = contacts.value.filter(c => c.id !== contact.id)
    })
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
