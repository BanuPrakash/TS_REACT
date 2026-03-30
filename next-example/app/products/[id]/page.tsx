import type Product from "@/models/Product";
export default async function Details({params}: {params: Promise<{id:string}>}) {

    let {id} = await params;
      const res = await fetch("https://fakestoreapi.com/products/" + id);
      const products:Product = await res.json();

      return <div>
        Details {products.description}
      </div>
}