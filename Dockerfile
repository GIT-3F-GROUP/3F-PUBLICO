FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY mcp ./mcp
COPY design-systems ./design-systems
ENV PORT=3000
EXPOSE 3000
CMD ["node", "mcp/index.js", "--http"]
