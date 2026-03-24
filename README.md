# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Portfolio Personal - Franco Núñez

Portfolio web moderno desarrollado con React, TypeScript y Vite.

## 🚀 Tecnologías utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **TypeScript** - Superset tipado de JavaScript
- **Vite** - Herramienta de construcción rápida
- **CSS3** - Estilos modernos con gradientes y animaciones
- **ESLint** - Linter para calidad de código

## 🎨 Características

- ✅ Diseño responsivo y moderno
- ✅ Navegación suave entre secciones
- ✅ Animaciones CSS atractivas
- ✅ Componentes reutilizables
- ✅ Tipado completo con TypeScript
- ✅ Optimizado para performance

## 📦 Instalación y uso

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd portfolio
   ```

2. **Instalar dependencias**

   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**

   ```bash
   npm run dev
   ```

4. **Construir para producción**

   ```bash
   npm run build
   ```

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 🏗️ Estructura del proyecto

```
src/
├── components/         # Componentes React
│   ├── Header.tsx     # Navegación y hero section
│   ├── About.tsx      # Sección sobre mí
│   ├── Projects.tsx   # Galería de proyectos
│   └── Contact.tsx    # Información de contacto
├── types/             # Definiciones de TypeScript
├── App.tsx           # Componente principal
└── main.tsx          # Punto de entrada
```

## 🎯 Secciones

1. **Header** - Navegación y presentación principal
2. **About** - Información personal y habilidades técnicas
3. **Projects** - Portafolio de proyectos destacados
4. **Contact** - Enlaces de contacto y redes sociales

## 🛠️ Personalización

Para personalizar el portfolio con tu información:

1. Edita los datos personales en `src/App.tsx`
2. Actualiza los proyectos en el array `projects`
3. Modifica las habilidades en el array `skills`
4. Cambia los colores y estilos en los archivos CSS

## 📱 Responsive Design

El portfolio está optimizado para:

- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)

## 🚀 Deploy

El proyecto está listo para ser desplegado en:

- Vercel
- Netlify
- GitHub Pages
- Cualquier servicio de hosting estático

---

Desarrollado con ❤️ por Franco Núñez

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
