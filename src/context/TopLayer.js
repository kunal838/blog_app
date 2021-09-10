import React, {useState,useEffect,useContext,createContext} from 'react'
 const datacontext = createContext();
 export const useData = ()=> useContext(datacontext);
function TopLayer({children}) {
    const [data,setData] = useState([])
  useEffect(() => {
    fetch("https://blogapiv1.herokuapp.com/api/v1")
    .then(res => res.json())
    .then(
      (result) => {
        
        setData((result));
        
        
       
      } )
      
  }, [])
    return (
        <datacontext.Provider value={[data , setData]}>
        {children}
    </datacontext.Provider>
    )
}

export default TopLayer
