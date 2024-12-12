import axios from "axios"

async function apiCall(){
    try {
        let url = "https://jsonplaceholder.typicode.com/posts"

        let response = await axios.get(url)
        console.log(response.data);

        let finalData = response.data
        finalData.map((x)=>{
            console.log(x.title);
        })
    } catch (error) {
        console.log(error);
    }
}
apiCall()