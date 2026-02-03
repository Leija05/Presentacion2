# PRD - Hector Leija Portfolio

## Original Problem Statement
El usuario quería mejorar su página web de presentación/portafolio tanto visual como estructuralmente. Preferencias:
- Diseño más creativo/llamativo con animaciones avanzadas
- Mejor organización y estructura del contenido
- Animaciones y transiciones más fluidas
- Mejor responsive/adaptación a móviles
- Colores únicos (sorprender al usuario)

## User Personas
- **Primary**: Reclutadores de tecnología buscando candidatos
- **Secondary**: Empresas y startups buscando desarrolladores
- **Tertiary**: Potenciales clientes para proyectos freelance

## Core Requirements (Static)
1. Hero section impactante con avatar interactivo
2. Sistema de modales para contenido expandido
3. Grid Bento para sección "Sobre mí"
4. Galería de proyectos con video preview
5. Integración de Discord en vivo
6. Toggle de tema oscuro/claro
7. Botón de CV/PDF
8. Diseño responsive para móvil y tablet
9. Animaciones fluidas con Framer Motion
10. Firma SVG animada en footer

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **State**: useState/useEffect (no external state management needed)
- **Styling**: CSS Variables for theming, Tailwind utility classes
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Icons**: Lucide React
- **External APIs**: Lanyard API (Discord status)

## Color Palette
### Dark Mode (Void & Plasma)
- Background: #050505
- Primary: #7B2CBF (Purple)
- Secondary: #CCFF00 (Neon Green)

### Light Mode (Architectural Paper)
- Background: #F2F2F2
- Primary: #FF4F00 (Orange)
- Secondary: #000000 (Black)

## What's Been Implemented (Jan 2026)
- [x] Complete portfolio redesign with "Void & Plasma" theme
- [x] HeroSection with parallax avatar and animated rings
- [x] Navbar with CV button and theme toggle
- [x] AboutSection with Bento Grid (5 cards)
- [x] SkillsSection with animated progress bars
- [x] ProjectsSection with video hover previews
- [x] ProcessSection with 4-step workflow
- [x] Footer with animated SVG signature
- [x] Modal system with glassmorphism effect
- [x] Contact modal with live Discord integration
- [x] ScrollToTop button
- [x] Full responsive design (mobile, tablet, desktop)
- [x] Theme persistence in localStorage

## Testing Status
- Frontend: 100% passed (19/19 tests)
- All interactive elements working correctly
- Discord integration live and functional
- Theme toggle working with proper persistence

## Prioritized Backlog

### P0 (Must Have) - COMPLETED
- ✅ All core features implemented

### P1 (Should Have)
- Add more projects as they're completed
- Integrate real CV PDF file
- Add local video/image assets for projects

### P2 (Nice to Have)
- Contact form with email sending
- Blog section
- Animated page transitions
- PWA support
- SEO optimization with meta tags

## Next Tasks
1. Add real project videos and images
2. Upload CV PDF to cv/Resume.pdf
3. Consider adding a contact form
4. Add more skills as learned
