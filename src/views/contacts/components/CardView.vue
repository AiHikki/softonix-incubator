<template>
  <ul class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </ul>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}
</script>
