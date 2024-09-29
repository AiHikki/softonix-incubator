<template>
  <div class="w-[500px] border border-gray-medium rounded-sm p-3">
    <h3 class="uppercase text-gray-medium font-semibold mb-4">Job openings</h3>
    <div class="mb-0.5">
      <p class="text-sm text-gray mb-0.5">Departments:</p>
      <MultiSelect
        v-model="selectedDepartments"
        :options="filteredDepartments"
        placeholder="Selected departments"
        multiple
        collapse-tags
      />
    </div>
    <p class="text-sm text-gray mb-3">
      Showing
      <span v-if="currentlyShowingJobOpenings" class="font-medium">
        {{ currentlyShowingJobOpenings }} out of
      </span>
      <span class="font-medium">
        {{ jobOpenings.length }}
      </span>
      job openings
    </p>

    <hr class="text-gray-medium mb-1">

    <ul class="pl-4">
      <li v-for="group in filteredJobOpenings" :key="group.departmentValue">
        <span class="text-primary font-medium">{{ group.departmentName }} ({{ group.jobs.length }})</span>
        <div class="pl-4">
          <ul class="list-disc list-inside mb-1">
            <li
              v-for="job in visibleJobs(group.jobs, group.departmentValue)"
              :key="job.id"
              class="truncate marker:text-green-600"
            >
              <a class="text-blue-400 hover:underline" href="job.url" target="_blank">
                {{ job.title }}
              </a>
            </li>
          </ul>

          <!-- Conditionally display the button only if there are more than 5 jobs -->
          <button
            v-if="group.jobs.length > VISIBLE_JOBS"
            class="text-blue-400 font-medium hover:underline"
            @click="toggleSeeMore(group.departmentValue, group.jobs.length)"
          >
            <!-- Change the button text based on the showMore state -->
            {{ showMore[group.departmentValue] ? 'See Less' : 'See More' }}
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const selectedDepartments = ref<string[]>([])
const departments = ref<IDepartment[]>([])
const jobOpenings = ref<IJobOpening[]>([])
const showMore = ref<Record<string, boolean>>({}) // Track which groups have "See more" expanded
const visibleCount = ref<Record<string, number>>({}) // Track number of visible jobs per department
const VISIBLE_JOBS = 5 // Define how many jobs to show at a time

onMounted(() => {
  departments.value = jobOpeningsService.fetchDepartments()
  jobOpenings.value = jobOpeningsService.fetchJobOpenings()
})

// Filter departments based on job openings
const filteredDepartments = computed(() => {
  const filtered = departments.value.filter(department =>
    jobOpenings.value.some(job => job.departments.includes(department.value))
  )

  filtered.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })

  const hasOtherJobs = jobOpenings.value.some(job => job.departments.length === 0)
  if (hasOtherJobs) {
    filtered.push({ name: 'Other', value: 'other' })
  }

  return filtered
})

// Group job openings by department
const groupedJobOpenings = computed(() => {
  const groupedObj: Record<string, IJobOpening[]> = {}

  jobOpenings.value.forEach(job => {
    const jobDepartments = job.departments
      .filter(departmentValue => filteredDepartments.value.map(dep => dep.value).includes(departmentValue))

    if (jobDepartments.length > 0) {
      jobDepartments.forEach(departmentValue => {
        if (!groupedObj[departmentValue]) {
          groupedObj[departmentValue] = []
        }
        groupedObj[departmentValue].push(job)
      })
    } else {
      if (!groupedObj.other) {
        groupedObj.other = []
      }
      groupedObj.other.push(job)
    }
  })

  return Object.entries(groupedObj)
    .map(([departmentValue, jobs]) => {
      const department = filteredDepartments.value.find(dep => dep.value === departmentValue)
      return {
        departmentValue,
        departmentName: department?.name ?? 'Unknown',
        jobs
      }
    })
    .sort((a, b) => {
      if (a.departmentName === 'Other') return 1
      if (b.departmentName === 'Other') return -1
      return a.departmentName.localeCompare(b.departmentName)
    })
})

// Filter job openings based on selected departments
const filteredJobOpenings = computed(() => {
  if (selectedDepartments.value.length > 0) {
    return groupedJobOpenings.value.filter(group => selectedDepartments.value.includes(group.departmentValue))
  }
  return groupedJobOpenings.value
})

// Get visible jobs based on pagination
function visibleJobs (jobs: IJobOpening[], departmentValue: string) {
  const count = visibleCount.value[departmentValue] || VISIBLE_JOBS
  return jobs.slice(0, showMore.value[departmentValue] ? jobs.length : count) // Show all jobs if "See More" is clicked
}

// Toggle the "See more" functionality
const toggleSeeMore = (departmentValue: string, totalJobs: number) => {
  showMore.value[departmentValue] = !showMore.value[departmentValue]

  // Set visible count based on the button state
  if (showMore.value[departmentValue]) {
    visibleCount.value[departmentValue] = totalJobs // Show all jobs
  } else {
    visibleCount.value[departmentValue] = VISIBLE_JOBS // Reset to initial count
  }
}

const currentlyShowingJobOpenings = computed(() => {
  // If no department is selected, return null to display the default message
  if (selectedDepartments.value.length === 0) {
    return null
  }

  // Create a set to track unique job IDs across the filtered departments
  const uniqueJobIds = new Set<string>()

  filteredJobOpenings.value.forEach(group => {
    group.jobs.forEach(job => {
      uniqueJobIds.add(job.id)
    })
  })

  return uniqueJobIds.size
})

</script>
