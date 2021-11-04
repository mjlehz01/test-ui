

## Getting Started

utilize yarn,

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



## Agrege algunas cositas mas
1- En el index agrege un contador de errores, si la peticion falla mas de 3 veces te direcciona a 
contacto,
2- Use recoilJs para conservar el estado, lo hace basado en atomos en un app mas grande se aprecia
su gran rendimiento ya que se apega de hooks, ademas es desarrollador por Facebook.
3- Use tailwindcss a mi punto de vista es css puro aunque una forma mas comoda de escribir, mas el purgado de css, que me dio 5kb en el Build.
4-En /api/ tengo la peticion get y en /utils/ tengo una funcion la cual tiene en token.
5- Las validaciones las logre con custom hook y archivo de validacion para comprobar si es numero, normalmente agregaria el error debajo del input aunque por los requirimientos lo puse en una lista.
6- Se me dificulto un poco mutar el estado de los items, ya que venia sellado por eso opte por hacer un clon, usando funciones de JSON.
7- No soy el mejor diseñando, aunque si puedo seguir los diseñor a pixel, en un diseño todos los tamaños los usario en base a calculos.
8- Por lo regular tendria una funcion para recargar los estados de recoil si fuera necesario para que solo haga las peticiones necesarias, igual si ubiera paginado, despues de obtener la primera respuesta podrian la siguiente pagina en cola.

¡Un gusto hacer este pequeño test me lo complique un poco para mostrar un poco de lo que soy capaz!



