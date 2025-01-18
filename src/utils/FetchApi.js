const Bearer_Token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
const base_url = process.env.NEXT_PUBLIC_BASE_URL
// ---------------------------------------------
const FetchApi = async ({ url, method = "get", query, data }) => {
    let status = ""
    if (method.toLocaleLowerCase() === "get") {
        try {
            const Response = await fetch(`${base_url}/api${url}?${query}`, {
                method,
                headers: {
                    "Authorization": `Bearer ${Bearer_Token}`
                },
                next: { tags: ['priyanshuAgrawalPortFolio'] }
            }).then(res => {
                status = res?.status
                return res?.json()
            }).then(data => {
                return ({ ...data, status })
            })
            return Response
        } catch (error) {
            console.log("error", error)
        }

    }

    else if (method.toLocaleLowerCase() === "post") {
        const Response = await fetch(`${base_url}${url}?${query}`, {
            method,
            headers: {
                "Authorization": `Bearer ${Bearer_Token}`
            },
            body: data,
            next: { tags: ['priyanshuAgrawalPortFolio'] }
        }).then(res => res?.json())?.then(data => data)
        return Response
    }
}

export default FetchApi