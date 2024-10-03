<template>
  <el-table row-class-name="cursor-pointer" :data="contacts" @row-click="editContact">
    <el-table-column label="Name">
      <template #default="contact">
        <div @click.stop>
          <template v-if="editModeMap[contact.row.id]">
            <input ref="inputRef" v-model="localContact.name" class="font-medium">
          </template>
          <template v-else>
            <p class="font-medium cursor-text">{{ contact.row.name }}</p>
          </template>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Description">
      <template #default="contact">
        <div @click.stop>
          <template v-if="editModeMap[contact.row.id]">
            <input v-model="localContact.description" class="text-gray">
          </template>
          <template v-else>
            <p class="text-gray cursor-text">{{ contact.row.description }}</p>
          </template>
        </div>
      </template>
    </el-table-column>

    <el-table-column label="Image">
      <template #default="contact">
        <ContactAvatar :contact-name="contact.row.name" :contact-image="contact.row.image" />
      </template>
    </el-table-column>
    <el-table-column label="Actions">
      <template #default="contact">
        <template v-if="editModeMap[contact.row.id]">
          <el-button :type="$elComponentType.danger" @click.stop="cancelEdit(contact.row.id)">Cancel</el-button>
          <el-button :type="$elComponentType.primary" @click.stop="onSave(contact.row.id)">Save</el-button>
        </template>
        <template v-else>
          <el-button :type="$elComponentType.primary" @click.stop="triggerEditMode(contact.row)">Edit</el-button>
          <el-button :type="$elComponentType.danger" @click.stop="deleteContact(contact.row)">Delete</el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { updateContact, deleteContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)

const editModeMap = reactive<Record<number, boolean>>({})
const inputRef = ref<HTMLInputElement>()

const localContact = ref<IContact>({
  id: 0,
  name: '',
  description: '',
  image: ''
})

function editContact (contact: IContact) {
  router.push({ name: $routeNames.upsertContact, params: { contactId: contact.id } })
}

function onSave (contactId: number) {
  updateContact(localContact.value)
  editModeMap[contactId] = false
}

async function triggerEditMode (contact: IContact) {
  editModeMap[contact.id] = true
  localContact.value = { ...contact }
  await nextTick()
  inputRef.value?.focus()
}

function cancelEdit (contactId: number) {
  editModeMap[contactId] = false
}
</script>
