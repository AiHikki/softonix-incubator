<template>
  <div class="flex items-start gap-4">
    <div class="flex items-center gap-4">
      <h3 class="font-medium m-0">Contact list</h3>

      <AppButton @click="createNewContact">
        <template #icon>
          <IconPlus class="w-5 h-5" />
        </template>
        Add Contact
      </AppButton>
    </div>

    <SearchInput v-model="searchQuery" />

    <SortSelect v-model="sortingType" />

    <RolesSelect v-model="selectedRoles" />
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-8">
    <ContactItem
      v-for="contact in filteredAndSortedContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/store'
import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import SearchInput from '@/components/SearchInput.vue'
import SortSelect from '@/components/SortSelect.vue'
import RolesSelect from '@/components/RolesSelect.vue'
import { computed, ref } from 'vue'

const router = useRouter()

const contactsStore = useContactsStore()
const { updateContact, deleteContact, sortContacts, filterContacts, filterByRole } = contactsStore

const searchQuery = ref('')
const sortingType = ref('')
const selectedRoles = ref([])

const filteredAndSortedContacts = computed(() => {
  const filtered = filterContacts(searchQuery.value)

  const filteredByRoles = filterByRole(filtered, selectedRoles.value)

  const sorted = sortContacts(filteredByRoles, sortingType.value)

  return sorted
})

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>
