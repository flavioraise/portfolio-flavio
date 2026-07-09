import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Genera un output autonomo per un'immagine Docker minimale.
  output: "standalone",
  // Blocca la root del progetto: c'è un package-lock.json anche in C:\Users\flavi
  // che altrimenti fa dedurre a Turbopack una root sbagliata.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
