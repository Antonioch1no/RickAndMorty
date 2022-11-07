import axios from "axios";
import { useEffect, useState } from "react";
import ResidentInfo from "./ResidentInfo"


const Locations = () => {
	const [locations, setLocations] = useState({}); // estado para extraer api
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

	useEffect(() => {
		const randomName = Math.floor(Math.random() * 126) + 1; // mostrar nunmero aleatorio

		axios
			.get(`https://rickandmortyapi.com/api/location/${randomName}`) // lla,mada a la api
      .then((res) => setLocations(res.data)) 
      setLoading(false)
	}, []);

	const searchLocation = () => {
		axios
			.get(`https://rickandmortyapi.com/api/location/${search}`) // lla,mada a la api poiir medio del boton search
			.then((res) => setLocations(res.data));
	};

	console.log(locations);
	return (

    <>
   <div>
     {
       loading ? <h1> Cargando....</h1> : 
       <div>
        
         <div className="container">

           <div className="btn"> 
           <input
         type="text"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
       />
       <button onClick={searchLocation}>search</button>
       {search > 126 && alert("el rango es de 1 a 126")}

           </div>
      
       </div> 
       <div>
         <h1>
         <b>Earth ({locations?.name})</b>
         
       </h1>
       </div>
 
     <div className="head">
      
      
       <p>Type: {locations.type}</p>
       <p>Dimension: {locations.dimension}</p>
       <p>Population: {locations.residents?.length}</p>
     </div>

     <div className="info"> {
        locations.residents?.map(resident => (
          <div ><ResidentInfo 
          resident = {resident} 
          key={resident}/>
          </div>
 
     ))
     }</div>
     </div>
     }
   </div>
</>
	)
}
export default Locations;
