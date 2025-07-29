import { afterAll, afterEach, beforeAll, expect, test } from "vitest"
import { server } from "./mocks/server"
import 'whatwg-fetch'

const LOGIN_URL = "https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token"
const API_URL = "https://tokenservice-jwt-2025.fly.dev/movies"
let jwt

beforeAll(async () => {
  server.listen()

  // Logging in to collect jwt token
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: 'klara@example.com',
      password: 'havefuncodeing123'
    })
  })

  jwt = await response.text();
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Collecting movies', async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${jwt}`
    }
  })
  
  // Checking status to be OK 200
  expect(response.status).toBe(200)

  const movies = await response.json()

  // Checking rsponse to be an array with length 3
  expect(Array.isArray(movies)).toBe(true)
  expect(movies.length).toBe(3)
})
