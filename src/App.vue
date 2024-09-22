<template>
  <component :is="Teleport" to="body">
    <div class="max-w-[1440px] p-6">
      <h3 class="font-medium m-0 mb-4">Contact list</h3>

      <button
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white
      shadow-sm hover:bg-indigo-500"
        @click="addNewContact"
      >
        Add Contact
      </button>

      <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
        <ContactItem
          v-for="(contact, index) in contacts"
          :key="contact.id"
          :contact="contact"
          :is-new="contact.isNew"
          @delete="deleteContact(index)"
          @save="onContactSave($event, index)"
        />
      </div>
    </div>
  </component>
</template>

<script lang="ts" setup>
import { ref, Teleport } from 'vue'
import type { IContact } from '@/types'
import ContactItem from '@/components/ContactItem.vue'

const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Esther Howard',
    description: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
])

function addNewContact () {
  const newContact: IContact = {
    id: Date.now(),
    name: '',
    description: '',
    image: '',
    isNew: true
  }

  contacts.value.unshift(newContact)
}

function deleteContact (index: number) {
  if (confirm('Are you sure you want to delete this contact?')) {
    contacts.value.splice(index, 1)
  }
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
  console.log(contacts.value)
}
</script>
