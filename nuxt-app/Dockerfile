# ----------------------
# Build stage
# ----------------------
    FROM node:20-alpine as builder

    # Create app directory
    WORKDIR /app
    
    # Copy all files
    COPY . .
    
    # Ensure correct permissions for Nuxt CLI before install
    # (This handles issues like "sh: nuxt: Permission denied")
    RUN npm install && chmod +x node_modules/.bin/nuxt
    
    # Prepare Nuxt (optional but good for type-safety, modules, etc.)
    RUN npm run prepare || true
    
    # Build Nuxt app
    RUN npm run build
    
    # ----------------------
    # Production stage
    # ----------------------
    FROM node:20-alpine
    
    WORKDIR /app
    
    # Copy only the production build output
    COPY --from=builder /app/.output .output
    
    # Set the port (optional: you can still override via .env)
    ENV NITRO_PORT=3000
    
    EXPOSE 3000
    
    # Run the Nuxt server
    CMD ["node", ".output/server/index.mjs"]