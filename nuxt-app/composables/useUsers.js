export const useUsers = async () => {
    const config = useRuntimeConfig()
  
    try {
      const { data, error } = await useFetch(`${config.public.apiBaseUrl}/users`)
      if (error.value) throw new Error(error.value.message)
      return data.value
    } catch (err) {
      console.error('Error fetching users:', err)
      return []
    }
  }
  