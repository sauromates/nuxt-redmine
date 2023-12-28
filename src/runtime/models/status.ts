export type RedmineIssueStatus = {
  id?: number
  name: string
  is_closed: boolean
}

export enum RedmineUserStatus {
  Active = 1,
  Pending = 2,
  Blocked = 3
}

export enum RedmineVersionStatus {
  Open = 'open',
  Closed = 'closed',
  Locked = 'locked'
}
