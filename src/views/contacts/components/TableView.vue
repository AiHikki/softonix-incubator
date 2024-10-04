<template>
  <el-table row-class-name="cursor-pointer" :data="contacts" @row-click="onRowClick">
    <el-table-column prop="name" label="Name">
      <template #default="{ row }">
        <div @click.stop>
          <template v-if="row.id === editContactId">
            <input ref="inputRef" v-model="localContact.name" class="font-medium">
          </template>
          <template v-else>
            <p class="font-medium cursor-text">{{ row.name }}</p>
          </template>
        </div>
      </template>
    </el-table-column>

    <el-table-column prop="description" label="Description">
      <template #default="{ row }">
        <div @click.stop>
          <template v-if="row.id === editContactId">
            <input v-model="localContact.description" class="text-gray">
          </template>
          <template v-else>
            <p class="text-gray cursor-text">{{ row.description }}</p>
          </template>
        </div>
      </template>
    </el-table-column>

    <el-table-column prop="image" label="Image">
      <template #default="{ row }">
        <ContactAvatar :contact-name="row.name" :contact-image="row.image" />
      </template>
    </el-table-column>
    <el-table-column prop="actions" fixed="right" label="Actions">
      <template #default="{ row }">
        <template v-if="row.id === editContactId">
          <el-button :type="$elComponentType.danger" @click.stop="cancelEdit()">Cancel</el-button>
          <el-button :type="$elComponentType.primary" @click.stop="saveContact(row.id)">Save</el-button>
        </template>
        <template v-else>
          <el-button :type="$elComponentType.primary" @click.stop="editContact(row)">Edit</el-button>
          <el-button :type="$elComponentType.danger" @click.stop="deleteContact(row)">Delete</el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { updateContact, deleteContact, getContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)

const editContactId = ref < number | null>(null)
const inputRef = ref<HTMLInputElement>()

const localContact = ref({
  name: '',
  description: ''
})

function editContact (row: IContact) {
  const { id, name, description } = row
  editContactId.value = id
  localContact.value = { name, description }
}

function cancelEdit () {
  editContactId.value = null
  localContact.value = {
    name: '',
    description: ''
  }
}

function saveContact (id: number) {
  const currentContact = getContact(id) as IContact
  updateContact(Object.assign(currentContact, localContact.value))
  cancelEdit()
}

function onRowClick (contact: IContact) {
  router.push({ name: $routeNames.upsertContact, params: { contactId: contact.id } })
}

</script>
