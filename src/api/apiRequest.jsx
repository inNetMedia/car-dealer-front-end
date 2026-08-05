const apiRequest = async (API_URL, options, setReqError) => {
    try {
        const response = await fetch(API_URL, options)
        const jsonData = await response.json()
        if (response.ok) {
            console.log(response)
            return { response, jsonData }
        } else {
            if (typeof setReqError === 'function') setReqError(true)
            return response
        }
    } catch (err) {
        console.log(err)
        if (typeof setReqError === 'function') setReqError(true)
        throw err
    }
}

export default apiRequest