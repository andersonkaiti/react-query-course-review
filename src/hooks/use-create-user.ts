import { useMutation } from '@tanstack/react-query'
import { createUser } from '../http/create-user'

export function useCreateUser() {
  const { mutateAsync, isPending, ...rest } = useMutation({
    mutationFn: createUser,
  })

  async function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.target)
    const name = String(form.get('name'))
    const email = String(form.get('email'))

    try {
      const { id } = await mutateAsync({ name, email })

      console.log(`Redireciona para /users/${id}`)
    } catch (error) {
      console.log(error?.toString())
    } finally {
      console.log('Terminou de executar!')
    }
  }

  return {
    createUser: mutateAsync,
    isLoading: isPending,
    handleSubmit,
    ...rest,
  }
}
