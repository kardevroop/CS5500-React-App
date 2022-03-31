import {useEffect, useState} from "react";
import * as service from "../../services/tuits-service";
import Tuits from "../tuits";

const MyTuits = () => {
  const [tuits, setTuits] = useState([]);
  //console.log("Fetch tuits");
  const findMyTuits = () =>
    service.findTuitByUser("me")
      .then(tuits => setTuits(tuits));
  //console.log(findMyTuits);
  useEffect(findMyTuits, []);
  const deleteTuit = (tid) =>
    service.deleteTuit(tid)
      .then(findMyTuits);
  return(
    <Tuits tuits={tuits}
           deleteTuit={deleteTuit}
           refreshTuits={findMyTuits}/>
  );
};

export default MyTuits;