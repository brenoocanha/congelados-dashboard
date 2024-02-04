"use client"

type Product = {
  produto: string;
  valor: string;
}

interface DataTableProps {
  products: Product[];
}

const DataTable = ({ products }: DataTableProps) => {

  const metadeDosProdutos = Math.ceil(products.length / 2);
  const primeiraMetade = products.slice(0, metadeDosProdutos);
  const segundaMetade = products.slice(metadeDosProdutos);

  const isEven = primeiraMetade.length === segundaMetade.length

  return (
    <>
      <div className="grid grid-cols-2 gap-2 w-full">
        <div className="w-full">
          <table className="w-full table-auto">
            <tbody className="flex w-full flex-col min-h-[calc(100vh-118px)] flex-grow">
              {primeiraMetade.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-[#FEFEFE] flex justify-between flex-grow items-center' : 'bg-[#FCD3B7] flex justify-between flex-grow items-center'}
                >
                  <td className="px-4 py-2 text-xl font-bold">{item.produto}</td>
                  <td className="px-4 py-2 w-full max-w-32 text-xl font-bold">{item.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full">
          <table className="w-full table-auto">
            <tbody className="flex w-full flex-col min-h-[calc(100vh-118px)] flex-grow">
              {segundaMetade.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-[#FEFEFE] flex justify-between flex-grow items-center' : 'bg-[#FCD3B7] flex justify-between flex-grow items-center'}
                >
                  <td className="px-4 py-2 text-xl font-bold">{item.produto}</td>
                  <td className="px-4 py-2 w-full max-w-32 text-xl font-bold">{item.valor}</td>
                </tr>
              ))}
              {!isEven && (
                <tr
                  className={segundaMetade.length % 2 === 0 ? 'bg-[#FEFEFE] flex justify-between flex-grow items-center' : 'bg-[#FCD3B7] flex justify-between flex-grow items-center'}
                >
                  <td className="px-4 py-2 text-xl font-bold">XXXXXXXXXXXXXXXXXXXXXX</td>
                  <td className="px-4 py-2 w-full max-w-32 text-xl font-bold">XXXXXX</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default DataTable;