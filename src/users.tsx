import { useQuery } from '@tanstack/react-query'

interface IUser {
  id: string
  name: string
  email: string
}

const FIVE_SECONDS = 5000

export function Users() {
  const { data, refetch, isLoading, isFetching } = useQuery({
    enabled: true,
    queryKey: ['users'],
    staleTime: FIVE_SECONDS,
    queryFn: async (): Promise<IUser[]> => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await fetch('http://localhost:3000/users')
      return await response.json()
    },
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
