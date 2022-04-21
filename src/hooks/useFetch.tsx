import axios from 'axios'
import { useEffect, useState } from 'react'
import { IQuestion } from '../context/types'

function useFetch (url: string) {
  const [data, setData] = useState<IQuestion[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get(url)
      .then(({ data: { results } }) => {
        setData(results)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
    return () => setData(undefined)
  }, [url])

  return { data, loading, error }
}

export default useFetch
