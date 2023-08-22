import axios from "axios";

const searchImages = async (term)=>{

    const response = await axios.get("https://api.unsplash.com/search/photos",{

        headers:{
            Authorization: 'Client-ID sqpMuGLGjB0JChiL69zfIIsBk5YeC7I_FqpKbjJNu2U',
        },
        params:{
            query:term,
        },
    });
    console.log(response)
    return response.data.results
}
//return response çok fazla bilgi içere bi obke döndürüo onun yerine results kısmına indirgedik.
//term ne ararsak onla alakalı foto gelmesini sağşılcak yani elimzile cars forest tek  tek girmemize gerek kalmıcak
export default searchImages