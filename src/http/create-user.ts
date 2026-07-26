interface ICreateUserRequest {
  name: string
  email: string
}

export interface IUser {
  id: string
  name: string
  email: string
}

export async function createUser({
  name,
  email,
}: ICreateUserRequest): Promise<IUser> {
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })

  return await response.json()
}
