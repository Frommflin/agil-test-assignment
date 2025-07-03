export const loginUser = async (username, password) => {
  const url = 'https://tokenservice-jwt-2025.fly.dev/token-service/v1/request-token'
  const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  return await response.text()
}