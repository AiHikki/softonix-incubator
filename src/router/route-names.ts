import { contactRouteNames } from '@/views/contacts/contacts.routes'
import { jobOpeningsRouteNames } from '@/views/job-openings/job-openings.routes'

export const routeNames = {
  ...contactRouteNames,
  ...jobOpeningsRouteNames
}
