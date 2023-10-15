import React from "react";
import { useState } from "react";
import Todo from "./Todo/Todo";

function App() {
  const [input , setInput] = useState('');
  const [todo , setTodo] = useState([]);
  const [show , setShow]= useState(true);
return (
  <div>
<div className=" bg-amber-500 items-center">
  <div className=" h-screen bg-amber-500 flex justify-center items-center">
   <Todo input={input} setInput={setInput} todo={todo} setTodo={setTodo} setShow={setShow} show={show} />
  </div>
  </div>
  </div>
)
 
} 

export default App;
  /* 
 return(
 <div className="bg-white h-screen flex justify-center ">
     <Api/>
 </div>
 )



   
 return(
  
  </div>
  </div>
   
  const [display , setDisplay] = useState(data);
  const[index , setIndex]= useState(0);

  const {Title, description , image}= display[index];

  const first =()=>{
  return setIndex(0);
 }

  const second=()=>{
    return setIndex(1);
   }

   const third=()=>{
  setIndex(2);
 }



return (
  <div className="bg-cyan-500">
    <Button second={second} first={first} third={third}/>
 <div className="flex items-center justify-center bg-cyan-500 h-screen ">
    <div className="border-2 shadow-md bg-white p-4 w-58 h-58">
      <img className="w-58 h-48  rounded-md" src={image}/>
      <h3 className="text-amber-500">{Title}</h3>
      <p className="font-light">{description}</p>
    </div>
</div>
</div>














  const allCategories = ['All' , ...new Set(data.map((items)=>
  items.category))];


  const [menuItems ,setMenuItems] = useState(data);
 const [categories ,  setCategories] = useState(allCategories);
 const filterItems=(category)=>{
   if (category === 'All'){
        return setMenuItems(data);
   }
      const categoryItems = data.filter((items)=>( items.category === category))
      setMenuItems(categoryItems);
 }

  <h1 className="text-center text-6xl p-4 text-amber-500">Categories</h1>
    <div className="flex items-center w-full justify-evenly space-x-96">
    <Categories categories={categories} filterItems={filterItems}/>
    </div>
      
     <MenuItems menuItems={menuItems} setMenuItems={setMenuItems}/>


 const [get , setGet] = useState([]);
  const[addsTodo , setaddTodo] = useState(false); 


   const [shows , setShows] = useState(true);
  return(
  <div className="h-screen bg-amber-500 flex justify-center items-center">
     <Show shows={shows} setShows={setShows} />
  </div>

  return (
    <div>
    <div className="h-screen bg-cyan-600  flex items-center justify-center">
   <Todo setGet={setGet} get={get} addsTodo={addsTodo} setaddTodo={setaddTodo}/>
 </div> 
 </div>
)

  return(
  <div className="bg-cyan-400 flex justify-center items-center h-screen">
    <Review/>
  </div>
)
  
  
  
  
  <div className="bg-blue-600 h-screen "> 
    <Routes>
          <Route path="/" exact Component={Home}/>
          <Route path="/About" exact Component={About}/>
          <Route path="/Contact Us" exact Component={Contact}/>
         </Routes>
   <Todo text={"Photoshop"}/>
   <Todo text={"React"}/>
   <Todo text={"Flutter"}/>
      <Mainnav/>
       <Buttin/>
   <Moda/>


    const [Loadin , setLoading]=useState(true);
 const [tours , setTours] = useState([]);
 

 const fetchData = async() =>{
  setLoading(true);
  try{
   const response = await fetch(url);
   const data = response.json();
   setTours(data);
  console.log(data);
   setLoading(false);
  }catch(error){
        
    setLoading(false);

  }
 }



 useEffect(() =>{
  fetchData();
},[]);




  return (
    <div>
      {Loadin ? <Loading/> :  <Tours tours={tours} />}
    </div>



  );
   </div>*/
