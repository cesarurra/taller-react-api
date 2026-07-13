/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0B0D12",
        surface: "#14181F",
        surface2: "#1B212B",
        portal: "#97CE4C",
        "portal-glow": "#C4F136",
        amber: "#FFB000",
        ink: "#EDEFE9",
        muted: "#8B93A1",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}

