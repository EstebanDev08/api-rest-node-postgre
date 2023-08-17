# Backend de Tienda Online

Desarrollé un proyecto integral en Node.js que constituye un backend robusto para una tienda en línea completa. Este proyecto abarcó desde la gestión de productos y categorías hasta la autenticación segura de usuarios y la autorización de rutas mediante JSON Web Tokens (JWT) y Passport. Implementé una estructura de base de datos eficiente a través de Sequelize y migraciones, y garantice la integridad de los datos mediante validación rigurosa con Joi. Además, incorporé un sistema de cifrado de datos para salvaguardar información sensible y diseñé rutas para el inicio de sesión y la recuperación de contraseñas, incluido el envío de correos electrónicos. En conjunto, este proyecto me permitió explorar a fondo el desarrollo backend y la implementación de tecnologías esenciales para un rendimiento sólido y seguro.

## Requisitos previos

- Node.js y npm (https://nodejs.org/)
- Docker (https://www.docker.com/)

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
  git clone https://github.com/TU_USUARIO/backend-tienda-online.git
```

2. Accede al directorio del proyecto:

```bash
  cd backend-tienda-online
```

3. Instala las dependencias:

```bash
  npm install
```

4. Crea un archivo `.env` en el directorio raíz del proyecto y completa las siguientes variables:

- DB_HOST='localhost'
- DB_PORT=5432

- DB_NAME='nombre de la base de datos'
- DB_USER="usuario"
- DB_PASSWORD="password"

- PG_EMAIL=email
- PG_PASSWORD=password

5. Inicia la base de datos:

Asegúrate de tener Docker instalado y en ejecución en tu máquina.

```bash
  docker-compose up
```

Este comando iniciará un contenedor de Docker con PostgreSQL.

6. Inicia la migracion inicial de la base de datos.

```bash
  migrations:run
```

Este comando configurará la base de datos para el proyecto.

## Ejecución

Una vez que hayas completado la configuración, puedes iniciar el servidor con el siguiente comando:

```bash
  npm run start
```

El servidor estará en ejecución en http://localhost:3000/api/v1.

## Prueba el Proyecto en Línea

Si prefieres probar el proyecto sin necesidad de descargar e instalarlo localmente, puedes acceder a la versión en línea que se encuentra disponible en el siguiente enlace:

[https://api-rest-node-postgre.vercel.app/](https://api-rest-node-postgre.vercel.app/)

Por favor, ten en cuenta que esta versión en línea también fue creada con fines didácticos y puede no tener la misma funcionalidad completa que la versión local. Recuerda no utilizar datos sensibles o reales al interactuar con la versión en línea.

## Endpoints

Aquí están las principales rutas disponibles en el backend:

- `/api/v1/products`: Rutas para gestionar productos.
- `/api/v1/users`: Rutas para gestionar usuarios.
- `/api/v1/category`: Rutas para gestionar categorías de productos.
- `/api/v1/customers`: Rutas para gestionar clientes.
- `/api/v1/orders`: Rutas para gestionar órdenes de compra.
- `/api/v1/favorites`: Rutas para gestionar productos favoritos.
- `/api/v1/cart`: Rutas para gestionar el carrito de compras.

Cada ruta admite operaciones CRUD (Crear, Leer, Actualizar y Eliminar) para las respectivas entidades.

### Endpoints del Carrito de Compras

- `GET /api/v1/cart/:id`: Obtiene el carrito de compras por ID.

- `POST /api/v1/cart/add-product`: Agrega un producto al carrito de compras.

- `PATCH /api/v1/cart/increment-product`: Incrementa la cantidad de un producto en el carrito de compras.

- `PATCH /api/v1/cart/decrement-product`: Decrementa la cantidad de un producto en el carrito de compras.

- `DELETE /api/v1/cart/delete-product`: Elimina un producto del carrito de compras.

- `DELETE /api/v1/cart/delete-all-products/:id`: Elimina todos los productos del carrito de compras por ID.

### Rutas de Categorías

- `GET /api/v1/category`: Obtiene todas las categorías de productos.

- `GET /api/v1/category/:id`: Obtiene una categoría de producto por su ID.

- `POST /api/v1/category`: Crea una nueva categoría de producto.

- `PATCH /api/v1/category/:id`: Actualiza la información de una categoría de producto existente.

- `DELETE /api/v1/category/:id`: Elimina una categoría de producto por su ID.

### Rutas de Clientes

- `GET /api/v1/customers`: Obtiene todos los clientes.

- `GET /api/v1/customers/:id`: Obtiene un cliente por su ID.

- `POST /api/v1/customers`: Crea un nuevo cliente.

- `PATCH /api/v1/customers/:id`: Actualiza la información de un cliente existente.

- `DELETE /api/v1/customers/:id`: Elimina un cliente por su ID.

### Rutas de Favoritos

- `GET /api/v1/favorites/:id`: Obtiene los favoritos por ID del usuario.

- `POST /api/v1/favorites/add`: Agrega un producto a los favoritos.

- `DELETE /api/v1/favorites/remove`: Elimina un producto de los favoritos.

### Rutas de Órdenes de Compra

- `GET /api/v1/orders`: Obtiene todas las órdenes de compra.

- `GET /api/v1/orders/:id`: Obtiene una orden de compra por su ID.

- `POST /api/v1/orders`: Crea una nueva orden de compra.

- `PATCH /api/v1/orders/:id`: Actualiza la información de una orden de compra existente.

- `DELETE /api/v1/orders/:id`: Elimina una orden de compra por su ID.

### Rutas de Productos

- `GET /api/v1/products`: Obtiene todos los productos con paginación.

- `GET /api/v1/products/:id`: Obtiene un producto por su ID.

- `POST /api/v1/products`: Crea un nuevo producto.

- `PATCH /api/v1/products/:id`: Actualiza la información de un producto existente.

- `DELETE /api/v1/products/:id`: Elimina un producto por su ID.

### Recomendación

La creación de usuarios con email y password no cuenta con ningún tipo de protección o encriptación. No se recomienda usar datos reales en la creación. Este proyecto fue creado con fines didácticos y no debe ser utilizado con datos sensibles o en un entorno de producción.

## Contribución

Si deseas contribuir a este proyecto, ¡serás bienvenido! Puedes abrir un "issue" o enviar una solicitud de extracción para proponer cambios o mejoras.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o comentario sobre el proyecto, no dudes en contactarme a través de mi correo electrónico o redes sociales.

¡Gracias por tu interés en este proyecto! Espero que sea útil para ti.
