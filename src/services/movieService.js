
export const createMovie = async (title,director,productionYear,description) => {
  const url = 'https://tokenservice-jwt-2025.fly.dev/movies'
  const jwt = localStorage.getItem('user')

  const response = await fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
    },
    body: JSON.stringify({
      "description": description,
      "director": director,
      "productionYear": productionYear,
      "title": title
    })
  })
  return await response.json()
}
