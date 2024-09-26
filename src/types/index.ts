export interface IContact {
  id: number
  name: string
  description: string
  image?: string
  role: string
}

export type TSorting = '' | 'default' | 'ascending' | 'descending'
