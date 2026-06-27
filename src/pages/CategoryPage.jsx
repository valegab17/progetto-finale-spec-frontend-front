import { useParams } from "react-router-dom"


export default function CategoryPage() {
    let { categoryName } = useParams()
    console.log(`"Stai guardando la pagina" ${categoryName}`);
   return null
  

}