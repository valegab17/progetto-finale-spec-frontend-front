import { useParams } from "react-router-dom"
import { useProduct } from "../hooks/useProductById"
export default function DetailPage() {
    const { id } = useParams()
    const { product } = useProduct(id)

    if (!product) { return <p> Caricamento...</p> }
    return (
        <>
            <div className="detail-container">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>€:{product.price}</p>
                {product.ingredients ? <p>{product.ingredients} </p> : null}
                <p className="danger-level">{product.dangerLevel}</p>
                
                <img src={product.img} alt={product.title} />
            </div>
        </>
    )
}