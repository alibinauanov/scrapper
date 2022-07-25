import axios from "axios";

class Parser
{
    static async getHtml(url)
    {
        try{
            const response = await axios.get(url)
            return response   
        }catch(e){
            console.log(e)
        }
    }
}
export default Parser