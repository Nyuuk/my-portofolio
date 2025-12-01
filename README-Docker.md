# Docker Setup for Portfolio

This portfolio can be built and run using Docker with Nginx.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, for easier management)

## Building and Running

### Using Docker Compose (Recommended)

1. Build and start the container:
   ```bash
   docker-compose up -d
   ```

2. Access the portfolio at: http://localhost:8080

3. Stop the container:
   ```bash
   docker-compose down
   ```

### Using Docker directly

1. Build the Docker image:
   ```bash
   docker build -t portfolio-nginx .
   ```

2. Run the container:
   ```bash
   docker run -d -p 8080:80 --name portfolio portfolio-nginx
   ```

3. Access the portfolio at: http://localhost:8080

4. Stop the container:
   ```bash
   docker stop portfolio
   docker rm portfolio
   ```

## Customization

- To change the port, modify the port mapping in `docker-compose.yml` or the `-p` flag in the docker run command
- To modify Nginx configuration, edit `nginx.conf` and rebuild the image

