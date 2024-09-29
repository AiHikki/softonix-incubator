import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'

class JobOpeningsService {
  fetchJobOpenings () {
    return jobOpenings
  }

  fetchDepartments () {
    return departments
  }
}

export const jobOpeningsService = new JobOpeningsService()
