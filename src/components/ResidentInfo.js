import axios from "axios";
import { useEffect, useState } from "react";


const ResidentInfo = ({resident}) => {
  const [residents, setResidents] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
axios.get(resident)
.then(res=> setResidents(res.data))
setLoading(false)
  },[])

  console.log(residents)
return (
<div className="card">

{
  loading ? <h1> Cargando....</h1> : 
  <div > 
  <div className="tableList">
    <div>{residents.name}</div>
    <div><img src={residents.image} alt=""/></div>
    <div className='status' >
    <div className={ `${ residents.status === "Alive" ? 'green' : residents.status==='Dead' ? "red" : "gray" } circle` } ></div>
    <h4>{residents.status}</h4>
    </div>
    <div>Origin:{" "}{residents.origin?.name}</div>
    <br/>
    <div>Episodios:{" "}{residents.episode?.length}</div>
  </div>
  </div>
}

</div>
  )
}
export default ResidentInfo;