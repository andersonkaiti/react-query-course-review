import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../http/get-users'

const FIVE_SECONDS = 5000
const ONE_SECOND = 1000

export function Users() {
  const { data, refetch, isLoading, isFetching, error, isError } = useQuery({
    enabled: true,
    queryKey: ['users'],
    staleTime: FIVE_SECONDS,
    gcTime: FIVE_SECONDS,
    refetchOnWindowFocus: false,
    // A cada erro, o React Query reexecuta a função, por padrão, 3 vezes
    // em períodos de tempos diferentes
    retry: 10,
    // retryDelay: ONE_SECOND,
    retryDelay: (_retryIndex) => ONE_SECOND,
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
      {isError && <h1 className="text-red-400">{error.toString()}</h1>}

      {data?.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
