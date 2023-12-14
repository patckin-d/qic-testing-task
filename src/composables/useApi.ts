import getMasksResponse from "../mocks/getMasks.json"
import getCountriesResponse from "../mocks/getCountries.json"

type AvailableURLs = "/masks" | "/countries"

const delay = (value: any, ms: number, result: "resolve" | "reject") => {
    return new Promise(resolve =>
        setTimeout(() => {
            if (result === "reject") return Promise.reject(value)
            else resolve(value)
        }, ms)
    )
};

const resolveWithDelay = (value: any, ms: number = 1000) => {
    return delay(value, ms, "resolve")
}

const rejectWithDelay = (value: any, ms: number = 1000) => {
    return delay(value, ms, "reject")
}

/*
    Пример использования:
    const api = useApi();

    const response1 = await api.get('/endpoint_1')
    const response2 = await api.get('/endpoint_2', {
        param1: 'test',
        param2: 1,
        param3: ['a', 'b']
    })
*/

export const useApi = () => {
    const get = (url: AvailableURLs, params: any = {}): Promise<any> => {
        switch (url) {
            case "/masks":
                if (!params.countries?.length){
                    return rejectWithDelay("No countries selected. You must pass `countries` parameter in way: `countries=ru,ca`")
                } else {
                    const countries = getCountriesResponse.map((country: any) => country.code)
                    const allExists = params.countries.every((country: string) => {
                        return countries.includes(country)
                    })

                    if (!allExists) {
                        return rejectWithDelay("Some of passed countries are not exists in database. Pass only countries from `/countries` endpoint")
                    }

                }

                return resolveWithDelay(getMasksResponse)
            case "/countries":
                return resolveWithDelay(getCountriesResponse)
            default:
                return rejectWithDelay("Unknown URL")
        }
    }

    return {
        get
    }
}