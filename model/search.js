import {Http} from "../utils/http";

class Search{

    results = []

    async search(q){
        console.log(q)
        this.results = await Http.request({
            url:`search?q=${q}`
        })
        return this.results
    }

}

export {
    Search,
}