import type { RedmineUserStatus } from './status'

export type RedmineUser = {
  id?: number
  login: string
  firstname: string
  lastname: string
  mail: string
  created_on: string
  updated_on: string
  last_login_on: string
  passwd_changed_on: string
  twofa_scheme?: string
  api_key: string
  status: RedmineUserStatus
}
