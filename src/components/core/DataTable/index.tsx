"use client"

type Product = {
  produto: string;
  valor: string;
}

interface DataTableProps {
  products: Product[];
}

const DataTable = ({ products }: DataTableProps) => {

  return (
    <>
      {products.map((item, index) => (
        <h1 key={index}>{item.produto}</h1>
      ))}
    </>
  )
}

export default DataTable;