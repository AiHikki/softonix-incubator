interface IDepartment {
  name: string
  value: string
}

interface IJobOpening {
  title: string
  id: string
  departments: string[]
  isClosed: boolean
  url: string
}
