"use client";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Toaster, toast } from "sonner";
import { db } from "../../utils/firebaseconfig";
import Image from "next/image";

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

function CatalogoProductos() {
  //   const [productos, setProductos] = useState([]);

  //   useEffect(() => {
  //     // Función para cargar los datos de Firestore
  //     const cargarProductos = async () => {
  //       // Referencia a la colección
  //       const collectionRef = collection(db, "productosListo");
  //       // Obtener los documentos
  //       const { docs } = await getDocs(collectionRef);
  //       // Mapear los datos a un array de productos
  //       const productosList = docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //       // Actualizar el estado
  //       setProductos(productosList);
  //     };

  //     // Llamar a la función para cargar los productos
  //     cargarProductos();
  //   }, []);

  // Añadir al local storage los productos de la tienda al ser seleccionados con elbotoón de agregar al carrito
  const agregarAlCarrito = (producto) => {
    // Obtener los productos del local storage
    let productosCarrito =
      JSON.parse(localStorage.getItem("productosCarrito")) || [];
    // Buscar el producto en el carrito
    const indiceProducto = productosCarrito.findIndex(
      (p) => p.id === producto.id
    );

    if (indiceProducto !== -1) {
      // Si el producto ya está en el carrito, aumenta la cantidad
      productosCarrito[indiceProducto].cantidad =
        (productosCarrito[indiceProducto].cantidad || 1) + 1;
      toast.success("Producto agregado al carrito");
    } else {
      // Si el producto no está en el carrito, lo añade con cantidad inicial de 1
      productosCarrito.push({ ...producto, cantidad: 1 });
      toast.success("Producto agregado al carrito");
    }

    // Guardar los productos en el local storage
    localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
  };

  return (
    <div className="mx-auto max-w-screen-xl ">
      <Toaster richColors />
      <section className="py-12 bg-white sm:py-16 lg:py-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Nuevos productos en la tienda
            </h2>
            <p className="mt-4 text-base font-normal leading-7 text-gray-600">
              Nuestras últimas adiciones a la tienda, con la mejor calidad y los
              precios más bajos.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            {mockupDataProductos.map((producto) => (
              <div className="relative " key={producto.id}>
                <div className="overflow-hidden aspect-w-1 aspect-h-1 rounded-lg">
                  <Image
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                    src={producto.imagen}
                    alt=""
                  />
                </div>
                <div className="absolute left-3 top-3">
                  <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] sm:text-xs font-bold tracking-wide text-gray-900 uppercase bg-white rounded-full">
                    Nuevo
                  </p>
                </div>
                <div className="flex items-start justify-between mt-4 space-x-4">
                  <div>
                    <h3 className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                      <a href="#" title="">
                        {producto.nombre}
                        <span
                          className="absolute inset-0"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </h3>
                    <div className="flex items-center mt-2.5 space-x-px">
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg
                        className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-base">
                      ${producto.precio}
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    className="mt-2 text-sm font-normal text-gray-600 
                  line-clamp-3 sm:text-base md:line-clamp-2 lg:line-clamp-3
                  "
                  >
                    {producto.descripcion}
                  </p>
                </div>
                <div>
                  <p
                    className="mt-2 text-sm font-normal text-gray-600 
                  line-clamp-3 sm:text-base md:line-clamp-2 lg:line-clamp-3
                  "
                  >
                    SKU: {producto.sku}
                  </p>
                </div>
                <div>
                  <p
                    className="mt-2 text-sm font-normal text-gray-600 
                  line-clamp-3 sm:text-base md:line-clamp-2 lg:line-clamp-3
                  "
                  >
                    Stock: {producto.stock}
                  </p>
                </div>
                <div
                  className="
                  absolute 
                "
                >
                  <button
                    type="button"
                    onClick={() => agregarAlCarrito(producto)}
                    className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-gray-900 rounded-md hover:bg-gray-800"
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CatalogoProductos;
