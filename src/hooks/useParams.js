import { useSearchParams } from 'react-router-dom'

export const useParams = () => {
    const [data, setData] = useState({})

    const [params] = useSearchParams()

    useEffect(() => {
        if (params) {
            const data = {}
            for (const [key, value] of params.entries()) {
                data[key] = value
            }
            setData(data)
        }
    }, [])

    return data
}
