export interface IUser {
  id: string
  name: string
  email: string
}

export async function getUsers(): Promise<IUser[]> {
  console.log('getUsers executou!')
  throw new Error('Deu ruim!')

  // await new Promise((resolve) => setTimeout(resolve, 1500))
  // const response = await fetch('http://localhost:3000/users')
  // return await response.json()
}
