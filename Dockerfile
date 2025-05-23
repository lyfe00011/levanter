Dockerfile
FROM node:20

Work directory set
WORKDIR /app

Copy package files and install dependencies
COPY package*.json ./
RUN npm install -g pm2 && npm install

Copy rest of the code
COPY . .

Expose port (අවශ්‍ය නම් 3000, 5000 etc.)
EXPOSE 3000

Start command
CMD ["pm2-runtime", "start", "--name", "levanter", "--watch", "index.js"]
