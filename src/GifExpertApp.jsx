import { useState } from "react"
// import AddCategory from "./components/AddCategory";
// import GifGrid from "./components/GifGried";

import {AddCategory,GifGrid} from "./components";


const GifExpertApp = () => {

    const [Categories, setCategories] = useState(['One Punch'])
    
    const onAddCategory= (newCategory)=>{
      //si la categoria existe
      if(Categories.includes(newCategory))return;

      setCategories([newCategory,...Categories]);
      // setCategories(cat =>[...Categories,'hola']);
    };
  return (
    <> 
    
     <h1> GifExpertApp </h1>
   <AddCategory 
  //  setCategories={setCategories}
  onNewCategory={onAddCategory}
   ></AddCategory>
   {/* //Todo: input */}

    
  
    
        {Categories.map(categoria => 
        (
            <GifGrid key={categoria} category={categoria} ></GifGrid>
        )
        )}
        
     
       
    </>
  
  )
}

export default GifExpertApp
