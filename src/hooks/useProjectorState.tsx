import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

type ProjectorContextValue = {
  projectorOn: boolean
  setProjectorOn: (value: boolean) => void
  toggleProjector: () => void
}

const ProjectorContext = createContext<ProjectorContextValue | null>(null)

export function ProjectorProvider({ children }: { children: ReactNode }) {
  const [projectorOn, setProjectorOn] = useState(true)

  const toggleProjector = useCallback(() => {
    setProjectorOn((prev) => !prev)
  }, [])

  const value = useMemo(
    () => ({ projectorOn, setProjectorOn, toggleProjector }),
    [projectorOn, toggleProjector],
  )

  return (
    <ProjectorContext.Provider value={value}>{children}</ProjectorContext.Provider>
  )
}

export function useProjectorState() {
  const ctx = useContext(ProjectorContext)
  if (!ctx) {
    throw new Error('useProjectorState must be used within ProjectorProvider')
  }
  return ctx
}
