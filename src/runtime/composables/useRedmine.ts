import { useRedmineIssues, type RedmineIssuesModule } from './useRedmineIssues'

export interface RedmineModulesRegistry {
  issues: RedmineIssuesModule
}

export const useRedmine = (): RedmineModulesRegistry => {
  const issues = useRedmineIssues()

  return {
    issues
  }
}
