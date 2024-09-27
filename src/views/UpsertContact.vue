<template>
  <div class="flex justify-center">
    <Card :title="cardTitle" class="w-[350px]">
      <div class="space-y-4">
        <AppInput v-model.trim="contactForm.name" placeholder="Name" />

        <AppInput v-model.trim="contactForm.description" placeholder="Description" />

        <AppInput v-model.trim="contactForm.role" placeholder="Role" />

        <AppInput v-model.trim="contactForm.image" placeholder="Image Link" />
      </div>

      <template #footer>
        <div class="px-6 pb-6 mt-2 flex gap-3">
          <AppButton class="flex-auto" @click="router.back">
            Cancel
          </AppButton>

          <AppButton v-if="currentContact" class="flex-auto" @click="onDelete">
            Delete
          </AppButton>

          <AppButton class="flex-auto" :disabled="!isFormValid" @click="onSave">
            <template #icon>
              <IconPlus class="w-5 h-5" />
            </template>

            Save
          </AppButton>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'
import type { IContact } from '@/types'

import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import Card from '@/components/Card.vue'

const router = useRouter()
const route = useRoute()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = reactive<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: '',
    role: ''
  })

const isFormValid = computed(() => {
  const { image, ...contact } = contactForm
  return Object.values(contact).every(c => !!c)
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: 'contacts' })
}

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm)
  } else {
    addContact(contactForm)
  }
  router.push({ name: 'contacts' })
}
</script>
