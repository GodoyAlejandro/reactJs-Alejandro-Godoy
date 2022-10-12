# Proyecto React Js Blockbuster e-commerce

Este proyecto esta pensado para ser un ecommerce de venta de peliculas al estilo de BlockBuster. Esta desarrollado en React Js mediante el comando npx create-react-app y se usaron varias librerias segun fueron surgiendo necesidades en el proyecto.

![Gif funcionamiento](readme.gif)

## Funcionamiento

Como se puede ver en el gif de arriba, la pagina presenta en su Home un listado de todas las peliculas disponibles, cada una posee una descripcion con la sinapsis correspondiente y un género especifico que sirve para filtrar las peliculas en: Accion, terror y comedia. Al seleccionar una en particular, renderiza el componete itemDetail que almacena los datos de la pelicula (nombre, descripción y precio), el stock correspondiente y un componente que deja al usuario ingresar cuantas unidades de la pelicula seleccionada quiere agregar al carrito. La logica implementada permite que el usuario vuelta a ingresar al detalle de un producto y volver a sumar mas productos al carrito pero no deja que la cantidad ingresada supere el stock aclarado. La vista del cart tiene funcionalidad para que el usuario quite los items que fueron ingresados por error. Antes de terminar la compra se pide al usuario ingresar unos datos de formulario que, luego de validarlos, devuelve el ticket con el id generado por Firebase.

## Librerias y utilidades

+ [React router dom](https://v5.reactrouter.com/web/guides/quick-start)
    + Esta libreria se implementó para el manejo dinámico de las rutas de la página
+ [Luxon](https://moment.github.io/luxon/#/)
    + Facilita el manejo de fechas y el como generarlas
+ [Material Ui](https://mui.com/)
    + Proporciona componentes ya estilizados de alta personalización.
+ [Formik](https://formik.org/)
    + Validación de formularios, indispensable debido a la facilidad que proporciona en su manejo y la buena integración que tiene con Material Ui
+ [Yup!](https://github.com/jquense/yup)
    + Se integra a Formik para la validación del formulario
+ [Firebase](https://firebase.google.com/)
    + Firebase brinda la base de datos de la cual la página extrae los productos y a la cual se le envian las ordenes de compra

### Link del proyecto
+ [Blockbuster Project](https://reactproject-4708e.web.app/)