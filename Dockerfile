# Stage 1: Build application
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production runtime
FROM node:20-alpine

WORKDIR /app

# Definir el entorno desde el inicio
ENV NODE_ENV=production
ENV PORT=5173

# Instalar ÚNICAMENTE dependencias de producción en la imagen final
COPY package*.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Copiar el resultado de la compilación
COPY --from=build /app/build ./build

EXPOSE 5173

CMD ["node", "build"]