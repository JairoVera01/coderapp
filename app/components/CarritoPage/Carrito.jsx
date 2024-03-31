"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Carrito() {
  const [carritoLocal, setCarritoLocal] = useState([]);
  //traer los datos del local storage
  useEffect(
    () => {
      const productosCarrito = JSON.parse(
        localStorage.getItem("productosCarrito")
      );
      setCarritoLocal(productosCarrito);
    },
    [
      //si el arreglo esta vacio se ejecuta una sola vez
    ]
  );

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-5">Carrito de compras</h2>

      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h3 className="font-semibold text-2xl">Products</h3>
            <h3 className="font-semibold text-2xl">Total</h3>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

          {carritoLocal.map((producto, index) => (
            <div
              key={index}
              className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
            >
              <div className="flex w-2/5">
                {/* Product Image */}
                <div className="w-20">
                  <Image
                    width={100}
                    height={100}
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                {/* Product details */}
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-sm">{producto.nombre}</span>
                  <span className="text-gray-500 text-xs">
                    {producto.descripcion}
                  </span>
                  <button className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                    Remove
                  </button>
                </div>
              </div>
              {/* Quantity adjustment */}
              <div className="flex justify-center w-1/5">
                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  {/* SVG for minus sign */}
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={producto.cantidad}
                />

                <svg
                  className="fill-current text-gray-600 w-3"
                  viewBox="0 0 448 512"
                >
                  {/* SVG for plus sign */}
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${producto.precio}
              </span>
              <span className="text-center w-1/5 font-semibold text-sm">
                ${(producto.precio * producto.cantidad).toFixed(2)}
              </span>
            </div>
          ))}

          {/* Coupon code */}
          <div className="flex mt-10 mb-5">
            <span className="text-sm font-semibold uppercase mr-2">
              Enter coupon code:
            </span>
            <input
              className="mr-2 p-2 border rounded"
              placeholder="Enter your code"
            />
            <button className="p-2 text-white bg-indigo-500 hover:bg-indigo-600">
              Apply
            </button>
          </div>

          {/* Continue shopping button */}
          <a
            href="#"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              {/* SVG for the cart icon */}
            </svg>
            Continue Shopping
          </a>
        </div>

        {/* Right side - subtotal section */}
        <div id="summary" className="w-1/4 px-8 py-10 bg-gray-100">
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items 3</span>
            <span className="font-semibold text-sm">590$</span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm uppercase">
              Shipping
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - $10.00</option>
              <option>Express shipping - $20.00</option>
            </select>
          </div>
          <div className="py-10">
            <label
              htmlFor="promo"
              className="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="p-2 text-sm w-full"
            />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
            Apply
          </button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>$600</span>
            </div>
            <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrito;
