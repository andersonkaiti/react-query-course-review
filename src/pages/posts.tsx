import { useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getUsers } from '../http/get-users'

export function Posts() {
  const queryClient = useQueryClient()

  function handleMouseEnter() {
    queryClient.prefetchQuery({
      queryKey: ['users'],
      queryFn: getUsers,
    })
  }

  return (
    <div className="space-y-4 p-5">
      <h1>Posts</h1>

      <Link to="/" className="underline" onMouseEnter={handleMouseEnter}>
        Ir para os usuários
      </Link>
    </div>
  )
}
