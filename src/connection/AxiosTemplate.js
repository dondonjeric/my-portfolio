import { useEffect, useState } from "react"

const AxiosTemplate = (config) => {
    const {
        axiosInstance,
        method,
        url,
        requestConfig
    } = config;
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [reload, setReLoad] = useState(0);

    const refetch = () => setReLoad(prev => prev+1);

    useEffect(() => {

        const controller = new AbortController();

        const fetchData = async() => {
            try{
                const result = await axiosInstance[method.toLowerCase()]
                (url, {
                    ...requestConfig,
                    signal: controller.signal
                });
                setError("");
                setResponse(result.data);
            }catch(error){
                setError(error.message);
            }finally{
                setLoading(false);
            }
        }

        fetchData();
        
        //clean up
        return () => controller.abort();

        // eslint-disable-next-line
    }, [reload]);
    return [response, error, loading, refetch];
}


export default AxiosTemplate;