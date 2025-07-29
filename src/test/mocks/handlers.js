import { http, HttpResponse } from "msw";

export const handlers = [
  http.post('https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token', async ({ request }) => {
    //Collecting login details from component
    const {username,password} = await request.json()

    if(username == 'klara@example.com' && password == 'havefuncodeing123'){
      return new HttpResponse('mocked-jwt', {
        status: 200,
        headers: {
          'Content-Type': 'text/plain'
        }
      })
    } else {
      return HttpResponse.json(
        {message: 'Unauthorized'},
        {status: 401}
      )
    }
  }),

  http.get('https://tokenservice-jwt-2025.fly.dev/movies', ({ request }) => {
    //get auth header
    const authHeader = request.headers.get('Authorization')

    if(authHeader === 'Bearer mocked-jwt'){
      return HttpResponse.json([
        {    
          "title": "The life of John Doe",
          "director": "John Doe Thats his name",
          "description": "Describes the extraordinary life of John Doe.",
          "productionYear": 2000,
          "id": 1
        },
        {    
          "title": "Avatar",
          "director": "James Cameron",
          "description": "Blue spacemonkeys fight humans to defend their home-planet.",
          "productionYear": 2005,
          "id": 2
        },
        {    
          "title": "The Hunchback of Notredame",
          "director": "Walt Disney",
          "description": "Inprioned deformed gypzy helps another gypzy escape Paris's insane leader.",
          "productionYear": 1996,
          "id": 3
        }
      ])
    } else {
      return HttpResponse.json(
        {message: 'Forbidden'},
        {status: 403}
      )
    }
  })
]
