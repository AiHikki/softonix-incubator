<template>
  <Card>
    <div class="flex">
      <div class="flex-grow text-sm truncate" @click.stop>
        <template v-if="editMode">
          <input
            ref="inputRef"
            v-model="localContact.name"
            type="text"
            class="block font-medium w-full"
          >
          <input v-model="localContact.description" type="text" class="block mt-1 text-gray w-full">
        </template>

        <template v-else>
          <p class="font-medium cursor-text">{{ contact.name }}</p>
          <p class="text-gray cursor-text mt-1 truncate">
            {{ contact.description }}
          </p>
        </template>
      </div>

      <div
        class="flex items-center justify-center w-[40px] h-[40px] ml-2 rounded-full shrink-0 overflow-hidden
      border border-gray-medium bg-gray-ultra-light"
      >
        <span
          v-if="imageHasError"
          class="font-medium uppercase"
        >{{ nameAbbrv }}
        </span>
        <LazyImg
          src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt="contact-logo"
        />
        <!-- <img
          v-else
          class="object-cover"
          src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
          alt="contact-logo"
          @error="imageHasError = true"
          @load="imageHasError = false"
        > -->
      </div>
    </div>

    <div class="flex justify-end mt-2 gap-2">
      <template v-if="editMode">
        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="editMode = false"
        >Cancel</span>

        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="onSave"
        >Save</span>
      </template>

      <template v-else>
        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="triggerEditMode"
        >Edit</span>

        <span
          class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="$emit('delete', contact)"
        >Delete</span>
      </template>
    </div>

    <template #footer>
      <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light" @click.stop>
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
    </template>
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const nameAbbrv = computed(() => {
  return props.contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

const imageHasError = ref(false)
</script>
