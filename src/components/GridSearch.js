
import Card from "./Card";
import { useSelector } from "react-redux";
import { useParams } from "react-router";


function GridGeneral() {

const medias= useSelector((state) => state.search);



  return ( <div className="galery">
{medias && medias.map((media,i)=>{
  return <Card media={media}  key={i}/>
})}
  </div>

  );
}

export default GridGeneral;