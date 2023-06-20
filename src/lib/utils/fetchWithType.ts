export default async function fetchWithType<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return await response.json()
}