import { config } from "dotenv"
import { beforeAll, describe, expect, test } from "vitest"

config()

const LOGIN_URL = "https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token"
const API_URL = "https://tokenservice-jwt-2025.fly.dev/movies"
let jwt

beforeAll(async () => {
  // Logging in to collect jwt token
  const response = await fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: import.meta.env.VITE_LOGIN_USERNAME,
      password: import.meta.env.VITE_LOGIN_PWD
    })
  })

  jwt = await response.text();
})

describe('Creation and removal of movie', () => {

  test('Create and Delete movie', async() => {
    const response = await fetch(API_URL,{
      method: "POST",
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({
        "director": "Julie Kagawa",
        "description": "A newborn vampires fight to survive turns into her fight to keep a group och humans alive and to a vampire-free zone called 'Eden'.",
        "productionYear": 2020,
        "title": "The Immortal Rules"
      })
    })
    expect(response.status).toBe(201)

    const data = await response.json()
    const deleteData = await fetch(`${API_URL}/${data.id}`, {
      method: "DELETE",
      headers:  {
        "Authorization": `Bearer ${jwt}`
      }
    })
    expect(deleteData.status).toBe(204)
  })
})
