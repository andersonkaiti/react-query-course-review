import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Users } from './users'

const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />

      <ReactQueryDevtools buttonPosition="bottom-left" position="right" />
    </QueryClientProvider>
  )
}
