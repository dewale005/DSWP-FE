FROM node
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
# RUN npm install
COPY . /app/
EXPOSE 4200
RUN npm run build
CMD ["npm", "start"]

