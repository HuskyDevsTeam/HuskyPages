# Usa la imagen oficial de Node 20
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración de npm
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN if [ "$NODE_ENV" = "production" ]; then npm run build; fi

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 5173

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
