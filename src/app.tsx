import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Users } from './users'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  )
}
