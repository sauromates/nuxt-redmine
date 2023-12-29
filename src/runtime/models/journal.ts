export type RedmineJournalEntry = {
  property: 'attr' | 'attachment' | 'relation'
  name: string
  old_value: string | null | boolean
  new_value: string | null | boolean
}

export type RedmineJournal = {
  id: number
  user: {
    id: number
    name: string
  }
  notes: string
  private_notes: boolean
  details: RedmineJournalEntry[]
}
