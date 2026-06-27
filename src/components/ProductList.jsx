
export function ProductList({products}){
return (
    <div className="product-list">
        {products.map((p) =>(
            <div className="product-card" key={p.title}>
                <h3 className="product-t">{p.title}</h3>
                <img src={p.categoryImg} alt="" />
                <p>{p.price}</p>
            </div>
        ))}
    </div>
)

}