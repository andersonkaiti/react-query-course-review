import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../http/get-users'

const FIVE_SECONDS = 5000

export function Users() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    enabled: true,
    queryKey: ['users'],
    staleTime: FIVE_SECONDS,
    gcTime: FIVE_SECONDS,
    // refetchOnWindowFocus: false,
    // refetchInterval: Long Polling
    // Dispara uma request a cada determinado período de tempo
    refetchInterval: FIVE_SECONDS,
    queryFn: getUsers,
  })

  return (
    <div className="p-4">
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-white px-4 py-2 text-black hover:bg-zinc-300"
        onClick={() => refetch()}
      >
        Listas usuários
      </button>

      {isLoading && <p>Carregando...</p>}
      {!isLoading && isFetching && <small className="block">Fetching...</small>}

      {data?.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
