# ☀️ Ecori Energia Solar — Site Imersivo

> Site interativo e imersivo da **Ecori Energia Solar**, inspirado no estilo do Moka Lavanderias, com cena 3D de casa solar, cursor personalizado de energia, cards com tilt 3D e animações scroll-driven.

---

## 🚀 Stack Tecnológica

| Tecnologia | Uso |
|---|---|
| **React 18 + TypeScript** | Base do projeto |
| **Vite** | Build e dev server |
| **Tailwind CSS** | Estilização completa |
| **@react-three/fiber + Three.js** | Cena 3D interativa (casa solar + partículas) |
| **@react-three/drei** | Helpers 3D (Environment, etc.) |
| **IntersectionObserver** | Animações ao scroll |
| **lucide-react** | Ícones |
| **Google Fonts** | Outfit (display) + Space Grotesk (body) |

---

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   └── ecori/
│       ├── Navbar.tsx          # Navbar fixa com blur + logo solar animado
│       ├── HeroSection.tsx     # Hero com fases animadas + estatísticas
│       ├── SolarHouseScene.tsx # Cena 3D Three.js (casa + painéis + partículas)
│       ├── SolarCursor.tsx     # Cursor personalizado com trail de energia
│       ├── HowItWorks.tsx      # 4 etapas do sistema solar com cards 3D tilt
│       ├── Technology.tsx      # Portfólio APsystems / SolarEdge / GoodWe
│       ├── Experience.tsx      # Benefícios + comparativo MLPE vs String
│       ├── Partners.tsx        # Parceiros globais + estatísticas
│       ├── Reseller.tsx        # CTA para revendedores
│       └── FinalSection.tsx    # Quote final + links de contato
├── hooks/
│   └── useScrollAnimation.ts  # IntersectionObserver hook
├── App.tsx                     # Composição das seções
├── main.tsx                    # Entry point React
└── index.css                   # Sistema de design (cores, animações)
```

---

## 🎨 Sistema de Cores (Ecori)

| Token | Valor | Uso |
|---|---|---|
| `--primary` | Verde escuro `hsl(88 60% 22%)` | Fundo escuro, navbar |
| `--secondary` | Verde limão `hsl(82 65% 45%)` | Destaques, ícones |
| `--accent` | Amarelo solar `hsl(45 95% 55%)` | CTAs, brilhos, cursor |
| `--background` | Branco suave `hsl(60 20% 97%)` | Fundo claro |

---

## ✨ Funcionalidades Principais

- **🌟 Cena 3D Three.js** — Casa com painéis solares e partículas douradas que flutuam e seguem o mouse
- **☀️ Cursor Solar Personalizado** — Trail de partículas de energia douradas com efeito de clique
- **🃏 Cards com Tilt 3D** — Efeito de perspectiva 3D nos cards ao hover (estilo Moka)
- **📜 Animações Scroll-Driven** — Elementos entram com fade + slide usando IntersectionObserver
- **⚡ Comparativo MLPE** — Tabela visual MLPE vs Inversor String convencional
- **📱 Totalmente Responsivo** — Mobile-first com menu hamburguer
- **🌙 Navbar inteligente** — Transparente no topo, frosted glass ao rolar

---

## 🛠️ Como Executar

```bash
# Clonar o repositório
git clone https://github.com/Diegobr77/ecori-solar-website.git
cd ecori-solar-website

# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 📋 Seções do Site

| Seção | Descrição |
|---|---|
| **Hero** | Logo animado em fases, cena 3D de casa solar, stats e CTAs |
| **Como Funciona** | 4 etapas da tecnologia MLPE com cards 3D interativos |
| **Tecnologia** | Cards dos 3 parceiros: APsystems, SolarEdge, GoodWe |
| **Benefícios** | Grid de 6 benefícios + comparativo MLPE vs String |
| **Parceiros Globais** | Cards dos parceiros com anos de parceria e stats |
| **Seja Revendedor** | CTA com 4 diferenciais e botões WhatsApp/Online |
| **Final** | Quote épica + links de contato + footer |

---

## 🔗 Links

- **Site atual Ecori:** [ecorienergiasolar.com.br](https://www.ecorienergiasolar.com.br)
- **Loja Online:** [ecorionline.com.br](https://www.ecorionline.com.br)
- **Inspiração:** [Moka Lavanderias](https://github.com/Diegobr77/immersive-wash-journey)

---

*Desenvolvido com a mesma arquitetura imersiva do Moka Lavanderias, adaptada para o universo da energia solar fotovoltaica.*# ecori-solar-website
Site imersivo da Ecori Energia Solar - React + Vite + TypeScript + Tailwind + Three.js
