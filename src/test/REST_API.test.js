import { config } from "dotenv"
import { afterEach, beforeAll, beforeEach, describe, expect, test } from "vitest"

config()

const LOGIN_URL = "https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token"
const API_URL = "https://tokenservice-jwt-2025.fly.dev/movies"
let jwt
let movie

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

describe("Creation and removal of movie", () => {

  test("Create and Delete movie", async() => {
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

describe("Update and Read movies", () => {
  beforeEach(async () => {
    const response = await fetch(API_URL,{
      method: "POST",
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
      },
      body:  JSON.stringify({
        "director": "Julie Kagawa",
        "description": "A newborn vampires fight to survive turns into her fight to keep a group och humans alive.",
        "productionYear": 2016,
        "title": "The Immortal Rules"
      })
    })

    movie = await response.json()
  })

  afterEach(async () => {
    await fetch(`${API_URL}/${movie.id}`, {
      method: "DELETE",
      headers:  {
        "Authorization": `Bearer ${jwt}`
      }
    })
    movie = null
  })

  test("Update movie title and director", async() => {
    const newDirector = "James Cameron"
    const newTitle = "Vampire Academy"

    movie.title = newTitle
    movie.director = newDirector

    const response = await fetch(`${API_URL}/${movie.id}`,{
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${jwt}`,
        "Content-Type": "application/json"
      },
      body:  JSON.stringify(movie)
    })
    expect(response.status).toBe(200)

    //Fetching updated movie to check changes
    const control = await fetch(`${API_URL}/${movie.id}`,{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    })
    expect(control.status).toBe(200)
    
    const controlData = await control.json()
    expect(controlData.title).toBe(newTitle)
    expect(controlData.director).toBe(newDirector)

  })

  test("Collect movies", async () => {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${jwt}`
      }
    })
    expect(response.status).toBe(200)
    
    const movies = await response.json()
    expect(Array.isArray(movies)).toBe(true)
    expect(movies.length).toBe(1)
    expect(movies[0].title).toBe("The Immortal Rules")
  })
})
