"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

function Carrito() {
  // traer los datos del local storage y mostrarlos estan en la clave "productosCarrito" y trae todo esto: cantidad
  // :
  // 4
  // descripcion
  // :
  // "Amazon Echo is a hands-free speaker you control with your voice. Echo connects to the Alexa Voice Service to play music, provide information, news, sports scores, weather, and more—instantly."
  // id
  // :
  // 1
  // imagen
  // :
  // "/images/echodot.jpg"
  // nombre
  // :
  // "Amazon Echo"
  // precio
  // :
  // 99.99
  // sku
  // :
  // "B01DFKC2SO"
  // stock
  // :
  // 10
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  //traer los datos del local storage
  useEffect(() => {
    const productosCarrito = JSON.parse(
      localStorage.getItem("productosCarrito")
    );
    setProductosCarrito(productosCarrito);
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl ">
      CARRITO DE COMPRAS
      <div>
        {productosCarrito.map((producto) => (
          <div key={producto.id} className="flex justify-between items-center">
            <div className="flex items-center">
              <Image
                width={80}
                height={80}
                src={producto.imagen}
                alt={producto.nombre}
                className="w-20 h-20"
              />
              <div>
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
              </div>
            </div>
            <div>
              <p>{producto.precio}</p>
              <p>{producto.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrito;
