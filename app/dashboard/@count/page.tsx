import axios from "axios";

const CountPage = async () => {
    const countLocations = await axios.get("http://localhost:3000/locations")
    console.log(countLocations.data)
    return countLocations?.data.length;
}


export default CountPage;