export type RedmineAttachment = {
  id: number
  filename: string
  filesize: number
  content_type: string
  description?: string
  content_url: string
  author: {
    id: number
    name: string
  }
  created_on: Date | string
}
