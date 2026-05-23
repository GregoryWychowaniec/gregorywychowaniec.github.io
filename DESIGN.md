---
name: Cyber Sentinel
colors:
  surface: '#0c1324'
  surface-dim: '#0c1324'
  surface-bright: '#33394c'
  surface-container-lowest: '#070d1f'
  surface-container-low: '#151b2d'
  surface-container: '#191f31'
  surface-container-high: '#23293c'
  surface-container-highest: '#2e3447'
  on-surface: '#dce1fb'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#dce1fb'
  inverse-on-surface: '#2a3043'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#aac7ff'
  on-secondary: '#003064'
  secondary-container: '#3e90ff'
  on-secondary-container: '#002957'
  tertiary: '#f4f6ff'
  on-tertiary: '#263143'
  tertiary-container: '#cfdaf2'
  on-tertiary-container: '#545f73'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aac7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#00468d'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#0c1324'
  on-background: '#dce1fb'
  surface-variant: '#2e3447'
  cyber-cyan: '#00F0FF'
  terminal-green: '#10B981'
  alert-red: '#EF4444'
  slate-900: '#0F172A'
  slate-400: '#94A3B8'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  section-header:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-label:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
  button-text:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 8px
  stack-md: 24px
  stack-lg: 64px
  section-padding: 120px
---

## Brand & Style

The brand personality is **technical, secure, and futuristic**, reflecting the high-stakes environment of cybersecurity engineering. It targets a professional audience—recruiters, fellow engineers, and CTOs—who value precision, system integrity, and modern technological stacks.

The design style is a blend of **Corporate Modern** and **High-Contrast "Cyber" Aesthetic**. It utilizes a deep, dark foundation to represent the "back-end" world of security, punctuated by high-vibrancy "electric" accents that suggest active monitoring and data flow. The pixel art hero image is integrated as a nostalgic "retro-tech" element, bridging the gap between classic computing and modern security practices. The overall emotional response should be one of **calm authority** and **technical sophistication**.

## Colors

The palette is rooted in a **Deep Dark** environment. The background utilizes a near-black `neutral` to maximize the impact of the vibrant accents. 

- **Primary (Cyber Cyan):** Reserved for critical interactive elements, data highlights, and "active" states. It mimics the glow of a high-end terminal.
- **Secondary (Electric Blue):** Used for supporting links, hover states, and iconography, providing depth to the primary cyan.
- **Tertiary (Slate Grey):** Used for card backgrounds and container surfaces to create subtle layered hierarchy against the black background.
- **Semantic Accents:** `terminal-green` is used for "Secure" or "Success" states, while `alert-red` is used for "Vulnerabilities" or "Critical Warnings," adhering to cybersecurity mental models.

## Typography

The typographic system creates a tension between **geometric futurism** and **utilitarian clarity**.

- **Headlines:** Space Grotesk provides a technical, slightly idiosyncratic feel that commands attention for branding and section titles. 
- **Body:** Inter is used for its exceptional readability in dark mode, ensuring that long-form project descriptions or bios remain accessible.
- **Labels/Data:** JetBrains Mono is used for all metadata, tags, and snippets. This reinforces the "engineer" persona, signaling that the user is viewing raw, precise information.

All headlines should use a slightly tighter letter-spacing to maintain a dense, industrial appearance.

## Layout & Spacing

This design system uses a **fixed-width, centered grid** for desktop to maintain a controlled, editorial feel, transitioning to a fluid single-column layout for mobile.

- **Grid Model:** 12-column layout with 24px gutters. Elements typically span 4 columns (for cards), 6 columns (for side-by-side content), or 12 columns (for hero and section headers).
- **Rhythm:** A strictly vertical stack is preferred. Large `section-padding` creates breathing room between distinct phases of the portfolio (e.g., from Experience to Projects).
- **Mobile Adaption:** At the 768px breakpoint, margins shrink to 16px and all column spans reflow to a single 12-column width. Headlines scale down using the `-mobile` variants to ensure readability without horizontal scrolling.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Neon Glows** rather than traditional shadows.

1.  **Base Layer:** The deepest `#020617` black serves as the canvas.
2.  **Surface Layer:** Cards and containers use `#0F172A` (Slate 900) with a 1px solid border of `#1E293B`.
3.  **Active Elevation:** Interactive elements do not "lift" with shadows; instead, they gain a **Cyan outer-glow** (drop-shadow with high spread and low opacity) and a brighter border to indicate focus.
4.  **Glassmorphism:** Navigation bars use a high-density backdrop blur (20px) with a semi-transparent Slate background (`rgba(15, 23, 42, 0.8)`) to maintain context while scrolling.

## Shapes

The shape language is **industrial and disciplined**. 

- **Soft Edges:** A universal `0.25rem` (4px) radius is applied to cards and buttons. This provides just enough refinement to feel modern without losing the "hard" edge associated with engineering tools.
- **Pixel Integration:** The pixel art assets should be displayed with "crisp-edges" or "pixelated" image-rendering CSS properties to maintain their intentional low-fidelity charm against the high-fidelity UI.
- **Buttons:** Primary CTA buttons should be rectangular with the standard soft radius, avoiding rounded pills to maintain the professional, structured aesthetic.

## Components

- **Buttons:** Use high-contrast fills for primary actions (`Cyber Cyan` background with black text). Secondary buttons use a "Ghost" style: 1px Cyan border with Cyan text. Use JetBrains Mono for all button labels.
- **Chips/Tags:** Small, rectangular tags with `#1E293B` backgrounds and `code-label` typography. Use these for tech stacks (e.g., "Python", "Zero Trust").
- **Cards:** Flat surfaces using `Slate 900`. Borders are critical here—use a subtle `1E293B` for default states and `Cyber Cyan` for hover states.
- **Input Fields:** Dark backgrounds (`#020617`) with `Slate 400` placeholder text. The bottom border should be emphasized, turning into a Cyan glow on focus.
- **Data Lists:** For experience and education, use a vertical timeline thread with a 2px Electric Blue stroke and Cyan "nodes" at each entry point. 
- **The "Console" Card:** A unique component for the bio section featuring a top bar with "Window Controls" (red/yellow/green dots) and a monospace typing effect to simulate a terminal environment.