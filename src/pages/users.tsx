import { useUsers } from '../hooks/use-users'

export function Users() {
  const { users, refetch, isLoading, isFetching, error, isError } = useUsers()

  return (
    <div className="p-4">
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-white px-4 py-2 text-black hover:bg-zinc-300"
        onClick={() => refetch()}
      >
        Listar usuários
      </button>

      {isLoading && <p>Carregando...</p>}
      {!isLoading && isFetching && <small className="block">Fetching...</small>}
      {isError && <h1 className="text-red-400">{error.toString()}</h1>}

      {users.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
