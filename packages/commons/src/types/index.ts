export interface Test {
  name: string
  age: number
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH'

export type ServerRoute = {
  method: HttpMethod
  path: string
}
