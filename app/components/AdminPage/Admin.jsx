import Image from "next/image";
import React from "react";

function Admin() {
  const mockupDataProductos = [
    {
      id: 1,
      nombre: "Amazon Echo",
      descripcion:
        "Amazon Echo is a hands-free speaker you control with your voice. Echo connects to the Alexa Voice Service to play music, provide information, news, sports scores, weather, and more—instantly.",
      precio: 99.99,
      imagen: "/images/echodot.jpg",
      sku: "B01DFKC2SO",
      stock: 10,
    },
    {
      id: 2,
      nombre: "JBL Tune buds",
      descripcion:
        "JBL Tune buds are the perfect companion for your music, whether you're listening to your favorite tunes or attending an online meeting.",
      precio: 79.99,
      imagen: "/images/jbl.png",
      sku: "B08J4D7FS3",
      stock: 5,
    },
    {
      id: 3,
      nombre: "Xiaomi Mi Bnad 6",
      descripcion:
        "The Xiaomi Mi Band 6 is a fitness tracker that monitors your heart rate, tracks your sleep, and provides you with notifications from your smartphone.",
      precio: 49.99,
      imagen: "/images/xiaomi.jpg",
      sku: "B08KXZ6XJZ",
      stock: 7,
    },
    {
      id: 4,
      nombre: "sony wh-ch510",
      descripcion:
        "Sony WH-CH510 Wireless On-Ear Headphones with Mic, Black (WHCH510/B).",
      precio: 59.99,
      imagen: "/images/sony.jpg",
      sku: "B07V4H5XN5",
      stock: 3,
    },
  ];
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Administrar Productos</h2>

      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Producto
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Descripción
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Precio
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              SKU
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Stock
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {mockupDataProductos.map((producto) => (
            <tr key={producto.id}>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10">
                    <Image
                      width={100}
                      height={100}
                      className="w-full h-full rounded-full"
                      src={producto.imagen}
                      alt={producto.nombre}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {producto.nombre}
                    </p>
                  </div>
                </div>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {producto.descripcion}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  ${producto.precio}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {producto.sku}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">
                  {producto.stock}
                </p>
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <button className="text-indigo-600 hover:text-indigo-900">
                  Editar
                </button>
                <button className="text-red-600 hover:text-red-900 ml-3">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
