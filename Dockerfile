# ---------- BUILD STAGE ----------
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- PRODUCTION STAGE ----------
FROM node:20
WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/dist ./dist

CMD ["serve", "-s", "dist", "-l", "8080"]