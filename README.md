🚀 MacBook Pro M4 - Interactive 3D Landing Page

<img width="1806" height="874" alt="image" src="https://github.com/user-attachments/assets/c7e7c0ed-447e-4b1a-a22c-b5c241fcd4cb" />
<img width="1797" height="846" alt="image" src="https://github.com/user-attachments/assets/0981958c-0407-459a-9efa-41c72bc9ce80" />
<img width="1619" height="884" alt="image" src="https://github.com/user-attachments/assets/b7d0741c-766c-45b0-942c-6f1233824d5f" />
<img width="1615" height="836" alt="image" src="https://github.com/user-attachments/assets/9a28b858-8869-46ca-b850-3895343c555e" />


> Experience the power of M4 chip through an immersive 3D interactive website featuring scroll-driven animations, dynamic 3D models, and stunning visual effects.**

✨ Features

🎨 **Stunning Visual Design**
- **Scroll-triggered animations** powered by GSAP ScrollTrigger
- **Smooth transitions** and parallax effects throughout the experience
- **Responsive design** optimized for desktop, tablet, and mobile devices
- **Apple-inspired UI** with gradient backgrounds and glassmorphism effects

🎮 **Interactive 3D Models**
- **Photorealistic MacBook models** (14" & 16") built with Three.js
- **Real-time color switching** between Space Grey and Silver finishes
- **Intuitive orbit controls** for 360° model exploration
- **Dynamic screen textures** that change based on scroll position

⚡ **Advanced Animations**
- **Pinned scroll sections** for immersive storytelling
- **Feature showcase** with synchronized video textures and 3D model rotation
- **Performance section** with animated floating images
- **Smooth entrance animations** using GSAP timelines

📱 **Fully Responsive**
- **Mobile-first approach** with touch-optimized controls
- **Adaptive 3D model scaling** based on device screen size
- **Optimized performance** across all devices

🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | Component-based UI architecture |
| **Three.js** | 3D graphics rendering and WebGL |
| **React Three Fiber** | React renderer for Three.js |
| **React Three Drei** | Useful helpers for R3F |
| **GSAP** | Professional-grade animations |
| **Zustand** | Lightweight state management |
| **Tailwind CSS** | Utility-first styling framework |
| **Vite** | Lightning-fast build tool |

🎯 Key Sections

1. **Hero Section** - Captivating video introduction with MacBook Pro branding
2. **Product Viewer** - Interactive 3D model with color and size customization
3. **Showcase** - Immersive M4 chip presentation with scroll-driven reveals
4. **Performance** - Dynamic graphics showcase highlighting GPU capabilities
5. **Features** - Rotating 3D model with synchronized AI feature demonstrations
6. **Highlights** - Masonry layout showcasing key MacBook Pro benefits
7. **Footer** - Complete navigation and legal information

🚀 Getting Started

Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v20.19.0 or higher)
- **npm** (v10.8.2 or higher) or **yarn** / **pnpm**

Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/macbook-pro-landing.git
   cd macbook-pro-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the project

Build for Production

```bash
npm run build
```

The optimized production build will be generated in the `dist` folder.

Preview Production Build

```bash
npm run preview
```

📂 Project Structure

```
macbook-pro-landing/
├── public/
│   ├── models/           # 3D MacBook models (.glb files)
│   ├── videos/           # Feature demo videos
│   ├── fonts/            # Custom Apple fonts
│   └── *.png/svg         # Images and icons
├── src/
│   ├── components/
│   │   ├── models/       # 3D model components
│   │   ├── three/        # Three.js specific components
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   └── ...
│   ├── constants/
│   │   └── index.js      # Configuration and data
│   ├── store/
│   │   └── index.js      # Zustand state management
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── package.json
└── vite.config.js
```

🎨 Customization

Changing Colors

Edit the Zustand store in `src/store/index.js`:

```javascript
const useMacbookStore = create((set) => ({
    color: '#2e2c2e',  // Default: Space Grey
    // Change to: '#adb5bd' for Silver
}));
```

Modifying Animations

Adjust GSAP timelines in component files:

```javascript
gsap.timeline({
    scrollTrigger: {
        trigger: '#section',
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
    }
});
```

🎬 Animation Performance

This project uses **GSAP's ScrollTrigger** for optimal scroll-based animations:
- Automatically manages requestAnimationFrame
- Batches DOM reads and writes
- Provides smooth 60fps animations
- Implements efficient GPU acceleration

📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome)

🤝 Contributing

Contributions are welcome! Feel free to:

1. **Fork** the project
2. **Create** your feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

📝 License

This project is created for educational purposes. MacBook Pro and Apple logos are trademarks of Apple Inc.

🙏 Acknowledgments

- **Apple** for design inspiration
- **Three.js** community for 3D rendering capabilities
- **GSAP** team for animation tools
- **Sketchfab** artist [jackbaeten](https://sketchfab.com/jackbaeten) for MacBook 3D models

📧 Contact

Have questions or suggestions? Feel free to reach out!

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ and React

</div>
