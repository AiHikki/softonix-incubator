class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  createContact (payload: Pick<IContact, 'name' | 'description'>) {
    return useHttp.post('rest/v1/contacts', payload)
  }

  deleteContact (payload: IContact) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${payload.id}`)
  }

  updateContact (payload: IContact) {
    return useHttp.patch(`rest/v1/contacts?id=eq.${payload.id}`, payload)
  }
}

export const contactsService = new ContactsService()
