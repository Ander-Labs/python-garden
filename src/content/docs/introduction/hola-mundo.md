---
title: Hola Mundo
description: Primeros pasos con markdown
---

```py

# python
print("Hola, Mundo!")

```

sudo docker run -d --restart unless-stopped -it \
--name n8n \
-p 5678:5678 \
-e N8N_HOST="workflow.aisaagrowth.lat" \
-e WEBHOOK_TUNNEL_URL="https://workflow.aisaagrowth.lat/" \
-e WEBHOOK_URL="https://workflow.aisaagrowth.lat/" \
-v ~/.n8n:/root/.n8n \
n8nio/n8n

##

server {
    listen 80;
    server_name workflow.aisaagrowth.lat;

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        chunked_transfer_encoding off;
        proxy_buffering off;
        proxy_cache off;

        # Headers for WebSocket support
        proxy_set_header Connection 'Upgrade';
        proxy_set_header Upgrade $http_upgrade;

        # Additional headers for forwarding client info
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}