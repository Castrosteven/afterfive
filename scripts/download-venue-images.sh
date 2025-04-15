#!/bin/bash

# Create venues directory if it doesn't exist
mkdir -p public/venues

# Download images with appropriate names
curl -L "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" -o "public/venues/loft-bar.jpg"
curl -L "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" -o "public/venues/sky-lounge.jpg"
curl -L "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" -o "public/venues/brew-bites.jpg"
curl -L "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" -o "public/venues/garden.jpg"
curl -L "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" -o "public/venues/neon-nights.jpg"
curl -L "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80" -o "public/venues/vault.jpg"
curl -L "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" -o "public/venues/sunset-terrace.jpg"
curl -L "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" -o "public/venues/jazz-cellar.jpg"

echo "Images downloaded successfully!" 