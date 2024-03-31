import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <section className="bg-white  h-full">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <Image
            className="mx-auto mb-4"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg"
            alt="404 Not Found"
            width={500} // Ajusta según la dimensión original de tu imagen
            height={300} // Ajusta según la dimensión original de tu imagen
          />
          <h1 className="mb-4 text-2xl font-extrabold text-primary-600 dark:text-primary-500">
            404 - No encontrado
          </h1>
          <p className="mb-10 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
            ¡Vaya! Esa página no existe.
          </p>
          <p className="mb-4 text-gray-500 ">
            Aquí hay algunos enlaces útiles:
          </p>
          <ul className="flex justify-center items-center space-x-4 text-gray-500 ">
            <li>
              <Link href="#" className="underline hover:text-gray-900 ">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="#" className="underline hover:text-gray-900 ">
                Carrito
              </Link>
            </li>
            <li>
              <Link href="#" className="underline hover:text-gray-900 ">
                Ayuda
              </Link>
            </li>
            <li>
              <Link href="#" className="underline hover:text-gray-900 ">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
