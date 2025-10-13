'use client'

import LoadingState from '@/components/loading-state'
import { useTRPC } from '@/trpc/client'
import { useSuspenseQuery } from '@tanstack/react-query'

export const AgentsView = () => {
  const trpc = useTRPC()
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions())

  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}


export const AgentsViewLoading = () => {
  return (
    <LoadingState 
      title='Loading Agents'
      description='This may take a few seconds'
    />
  )
}

export const AgentsViewError = () => {
  return (
    <LoadingState 
      title='Error Loading Agents'
      description='Something went wrong'
    />
  )
}



