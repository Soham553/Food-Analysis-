# Step 1: Build
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Step 2: Serve
FROM node:18
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build

CMD ["serve", "-s", "build", "-l", "8080"]