import { useQuery } from '@tanstack/react-query'

interface IUser {
  id: string
  name: string
  email: string
}

export function Users() {
  // const [signedIn, setSignedIn] = useState(false)

  const {
    data,
    refetch,
    isLoading,
    isPending: _isPending,
    isFetching,
  } = useQuery({
    // propriedade reativa
    enabled: false,
    queryKey: ['users'],
    queryFn: async (): Promise<IUser[]> => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await fetch('http://localhost:3000/users')
      return await response.json()
    },
  })

  /**
   * isLoading: é o loading inicial.
   * isPending: é true enquanto não houver valor no cache.
   * isFetching: é true sempre que a queryFn é executada.
   *
   * isLoading = isPending && isFetching
   */

  return (
    <div className="p-4">
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-white px-4 py-2 text-black hover:bg-zinc-300"
        // onClick={() => setSignedIn(true)}
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
