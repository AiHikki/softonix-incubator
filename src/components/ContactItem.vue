<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode || isNew">
            <input
              ref="inputRef"
              v-model.trim="localContact.name"
              type="text"
              class="block font-medium w-full"
              placeholder="Name"
            >
            <input
              v-model.trim="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full"
              placeholder="Description"
            >
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>

        <template v-if="editMode || isNew">
          <label class="cursor-pointer hover:underline">
            <img
              v-if="isImageValid"
              class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
              :src="localContact.image"
              alt="contact-logo"
            >

            <div
              v-else
              class="w-[40px] h-[40px] flex items-center justify-center
               bg-gray-light text-blue-500 ml-2 rounded-full shrink-0 uppercase"
            >
              <IconUpload />
            </div>
            <input class="hidden" type="file" accept="image/*" @change="handleUploadImg">
          </label>
        </template>

        <template v-else>
          <img
            class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
            :src="contact.image"
            alt="contact-logo"
          >
        </template>
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode || isNew">
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="cancel"
          >
            Cancel
          </button>

          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline
            disabled:cursor-not-allowed disabled:text-gray"
            :disabled="!isFormValid"
            @click="onSave"
          >
            Save
          </button>
        </template>

        <template v-else>
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >
            Edit
          </button>

          <button
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >
            Delete
          </button>
        </template>
      </div>
    </div>

    <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
      <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
        <IconEnvelope />
        <span class="ml-3">Email</span>
      </div>
      <div
        class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
      >
        <IconPhone />
        <span class="ml-3">Call</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconUpload from '@/components/icons/IconUpload.vue'

const props = defineProps<{
  contact: IContact
  isNew?: boolean
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()
const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})
const editMode = ref(false)

watchEffect(() => {
  if (inputRef.value) {
    inputRef.value.focus()
  }
})

const isNameValid = computed(() => {
  const name = localContact.value.name
  return name.length >= 5 && /[A-Z]/.test(name)
})

const isDescriptionValid = computed(() => {
  const description = localContact.value.description
  return description.length >= 20 && description.split(' ').length >= 2
})

const isImageValid = computed(() => {
  return localContact.value.image.length > 0
})

const isFormValid = computed(() => {
  return isNameValid.value && isDescriptionValid.value && isImageValid.value
})

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
}

function onSave () {
  if (isFormValid.value) {
    const contactToSave = {
      ...localContact.value,
      id: props.contact.id
    }
    emit('save', contactToSave)
    editMode.value = false
  }
}

function cancel () {
  if (props.isNew) {
    emit('delete')
  } else {
    editMode.value = false
  }
}

function handleUploadImg (e: Event) {
  const input = e.target as HTMLInputElement
  const file = input?.files?.[0]
  if (file) {
    const fileReader = new FileReader()

    fileReader.readAsDataURL(file)

    fileReader.onload = () => {
      const result = fileReader.result as string
      localContact.value.image = result
    }
  }
}
</script>
