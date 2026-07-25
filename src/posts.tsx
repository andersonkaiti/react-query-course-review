import { useQuery } from '@tanstack/react-query'

interface IUser {
  id: string
  name: string
  email: string
}

const FIVE_SECONDS = 5000

export function Posts() {
  const { data } = useQuery({
    enabled: true,
    queryKey: ['users'],
    staleTime: FIVE_SECONDS,
    queryFn: async (): Promise<IUser[]> => {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const response = await fetch('http://localhost:3000/users')
      return await response.json()
    },
  })

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
