export type RedmineIssueRelationType = 'relates' | 'duplicates' | 'blocks' | 'precedes' | 'copied_to'

export type RedmineIssueRelation = {
  id: number
  issue_id: number
  issue_to_id: number
  relation_type: RedmineIssueRelationType
  delay: number | null
}
