import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IContact, TSorting } from '@/types'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Developer'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Technician'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      role: 'Officer'
    }
  ])

  const roles = computed(() => {
    return Array.from(new Set(contacts.value.map(c => c.role)))
  })

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  function filterContacts (query: string) {
    return contacts.value.filter(c => {
      const adjustedQuery = query.toLowerCase()
      return c.name.toLowerCase().includes(adjustedQuery) || c.description.toLowerCase().includes(adjustedQuery)
    })
  }

  function sortContacts (contacts: IContact[], sortBy: TSorting) {
    console.log(sortBy)
    if (sortBy === 'ascending') {
      return [...contacts].sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortBy === 'descending') {
      return [...contacts].sort((a, b) => b.name.localeCompare(a.name))
    } else {
      return contacts
    }
  }

  function filterByRole (contacts: IContact[], selectedRoles: string[]) {
    if (selectedRoles.length === 0) return contacts
    return contacts.filter(contact => selectedRoles.includes(contact.role))
  }

  return {
    contacts,
    roles,
    addContact,
    deleteContact,
    updateContact,
    sortContacts,
    filterContacts,
    filterByRole
  }
})
