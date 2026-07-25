import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../http/get-users'

const FIVE_SECONDS = 5000

export function Posts() {
  const { data } = useQuery({
    enabled: true,
    queryKey: ['users'],
    staleTime: FIVE_SECONDS,
    queryFn: getUsers,
  })

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
