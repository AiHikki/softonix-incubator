<template>
  <div class="max-w-[350px] mx-auto">
    <el-card>
      <template #header>
        <p class="font-semibold text-xl">
          {{ cardTitle }}
        </p>
      </template>

      <el-form ref="formRef" :rules="formRules" :model="formModel" @submit.prevent="onSubmit">
        <el-form-item prop="name">
          <el-input v-model="formModel.name" placeholder="Name" />
        </el-form-item>

        <el-form-item prop="description">
          <el-input v-model="formModel.description" placeholder="Description" />
        </el-form-item>

        <el-form-item>
          <el-input v-model="formModel.image" placeholder="Image Link" />
        </el-form-item>

        <div class="flex justify-center">
          <el-button :type="$elComponentType.primary" @click="$router.back">
            Cancel
          </el-button>

          <el-button v-if="currentContact" :type="$elComponentType.danger" @click="onDelete">
            Delete
          </el-button>

          <el-button native-type="submit" :type="$elComponentType.primary">
            <template #icon>
              <IconPlus class="w-5 h-5" />
            </template>

            Save
          </el-button>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const formRef = useElFormRef()
const formModel = useElFormModel(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

const formRules = useElFormRules(
  {
    name: [useRequiredRule()],
    description: [useRequiredRule()]
  }
)

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  if (currentContact.value) {
    updateContact(formModel)
  } else {
    addContact(formModel)
  }
  router.back()
}

function onSubmit () {
  formRef.value.validate(isValid => {
    if (isValid) {
      onSave()
    }
  })
}
</script>
