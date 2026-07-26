import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../http/get-users'

export function useUsers() {
  const { data, ...rest } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  })

  return {
    ...rest,
    users: data ?? [],
  }
}
