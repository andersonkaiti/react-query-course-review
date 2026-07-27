import { useCreateUser } from '../hooks/use-create-user'
import { useUsers } from '../hooks/use-users'

export function Users() {
  const {
    users,
    refetch,
    isLoading: isUsersLoading,
    isFetching,
    error: usersError,
    isError,
  } = useUsers()

  const { handleSubmit, isLoading } = useCreateUser()

  return (
    <div className="p-4">
      <div className="mb-10">
        <form className="flex max-w-md flex-col gap-2" onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            className="rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-neutral-600"
            name="name"
          />
          <input
            placeholder="E-mail"
            className="rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-neutral-600"
            name="email"
          />

          <button
            type="submit"
            className="mt-1 cursor-pointer rounded-md bg-blue-400 py-2 text-base text-zinc-950 hover:bg-blue-500"
          >
            {isLoading ? 'Cadastrando...' : 'Cadastrar'}
          </button>
        </form>
      </div>

      <button
        type="button"
        className="cursor-pointer rounded-lg bg-white px-4 py-2 text-black hover:bg-zinc-300"
        onClick={() => refetch()}
      >
        Listar usuários
      </button>

      {isUsersLoading && <p>Carregando...</p>}
      {!isUsersLoading && isFetching && (
        <small className="block">Fetching...</small>
      )}
      {isError && <h1 className="text-red-400">{usersError.toString()}</h1>}

      {users.map((user) => (
        <div key={user.id}>
          <strong className="block">{user.name}</strong>
          <small>{user.email}</small>
        </div>
      ))}
    </div>
  )
}
