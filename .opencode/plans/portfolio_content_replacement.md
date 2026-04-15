# Plan: Replace Current Portfolio Content with Old Portfolio Content

## Goal
Replace all content in the current portfolio with content from the old portfolio while preserving the current template/styling (3D character, animations, etc.).

## Approach
1. Keep the current file structure and TSX files (template/styling)
2. Replace the content inside each TSX file with the corresponding content from old portfolio (converted from JSX to TSX)
3. For components that exist in old portfolio but not in current portfolio, create new TSX files with the same name (.tsx) and place them in appropriate directories
4. Copy assets (images) from old portfolio to current portfolio, updating paths in content as needed
5. Copy store, utils, and other supporting files from old portfolio, adapting to current structure if needed
6. Ensure all sections from old portfolio are represented in the current portfolio

## Detailed Steps

### 1. Analyze Current Portfolio Structure
- Current TSX components in src/components/
- Current store structure (src/store/)
- Current utils (src/components/utils/)
- Current assets and images

### 2. Analyze Old Portfolio Structure
- Old JSX components in src/components/
- Old store (src/store.js, src/projectsSlice.js)
- Old utils (src/utils/)
- Old lib (src/lib/)
- Old pages/api/ (backend)
- Old assets and images

### 3. Map Old Portfolio Components to Current Portfolio
| Old Component | Purpose | Current Equivalent | Action |
|---------------|---------|-------------------|--------|
| About.jsx | About section | About.tsx | Replace content |
| Experience.jsx | Experience/Career | Career.tsx | Replace content |
| Projects.jsx | Projects/Work | Work.tsx | Replace content |
| Certifications.jsx | Certifications | Certifications.tsx | Replace content |
| Contact.jsx | Contact | Contact.tsx | Replace content |
| Skills.jsx | Skills section | Not present | Create Skills.tsx |
| Home.jsx | Home page | Landing.tsx? | Replace content of Landing or create new home section |
| Header.jsx | Header | Navbar.tsx? | May need to integrate |
| Footer.jsx | Footer | Not present | Create Footer.tsx |
| NavLink.jsx | Navigation link | Used in Navbar | Update Navbar content |
| ProjectCard.jsx | Project card | Used in Work | Update Work content |
| AnimatedButton.jsx | Button component | May be used elsewhere | Create AnimatedButton.tsx if needed |
| DemoModal.jsx | Demo modal | Not present | Create DemoModal.tsx if needed |
| DeploymentGuide.jsx | Deployment guide | Not present | Create DeploymentGuide.tsx if needed |

### 4. Content Replacement Process
For each mapped component:
- Read old JSX component
- Convert JSX to TSX (change .jsx to .tsx, add proper TypeScript annotations if needed)
- Replace content of current TSX file with converted content
- Update any asset paths (images) to point to new locations in public/ or src/images/

### 5. Asset Handling
- Copy all images from old portfolio's src/images/ to current portfolio's public/images/ or src/images/
- Update image paths in copied components to reflect new location
- Copy other assets like react.svg, resume PDF, etc.

### 6. Store and Utils
- Replace src/store/index.ts and src/store/projectsSlice.ts with content from old portfolio's src/index.js and src/projectsSlice.js (converted to TS)
- Replace src/lib/utils.js if needed
- Replace src/utils/ with old portfolio's src/utils/ (techIcons.jsx, projectImages.js) converted to TSX/TS

### 7. Backend API
- If current portfolio needs a contact API endpoint, copy src/pages/api/contact.js from old portfolio to current portfolio's src/pages/api/contact.js (if the directory structure supports it)

### 8. Verify Template Integrity
- Ensure that after content replacement, the current template (3D character, animations, smooth scroll, etc.) still functions correctly
- The MainContainer.tsx and App.tsx should remain largely unchanged except for the imported component content

### 9. Final Verification
- Run development server to ensure no errors
- Check that all old portfolio content is present and correctly displayed
- Ensure no content is missed from old portfolio

## Files to Create/Update

### Components to Update (content replacement):
- src/components/About.tsx
- src/components/Career.tsx (from Experience.jsx)
- src/components/Work.tsx (from Projects.jsx)
- src/components/Certifications.tsx
- src/components/Contact.tsx
- src/components/Landing.tsx (possibly from Home.jsx)

### Components to Create:
- src/components/Skills.tsx (from Skills.jsx)
- src/components/Footer.tsx (from Footer.jsx)
- src/components/Navbar.tsx (may need update from Header.jsx and NavLink.jsx)
- src/components/ProjectCard.tsx (from ProjectCard.jsx)
- src/components/AnimatedButton.tsx (from AnimatedButton.jsx)
- src/components/DemoModal.tsx (from DemoModal.jsx)
- src/components/DeploymentGuide.tsx (from DeploymentGuide.jsx)

### Utils and Store:
- src/store/index.ts (from src/index.js)
- src/store/projectsSlice.ts (from src/projectsSlice.js)
- src/components/utils/projectImages.ts (from src/utils/projectImages.js)
- src/components/utils/techIcons.tsx (from src/utils/techIcons.jsx)
- src/lib/utils.ts (from src/lib/utils.js) if used

### Assets:
- Copy all images from old src/images/* to public/images/ (or src/images/)
- Copy src/assets/react.svg to public/ or src/assets/
- Copy resumes and other files

### API:
- src/pages/api/contact.ts (from src/pages/api/contact.js) if needed

## Notes on Conversion
- JSX to TSX: mainly file extension change, but may need to add TypeScript props annotations, event typing, etc.
- JS to TS: change extension, add type annotations where beneficial
- Image paths: old portfolio likely uses relative paths like `src/images/...`; new portfolio may use `/images/` (public) or `../images/`

## Next Steps
Once this plan is approved, we will create a todo list for implementation and proceed with the content replacement.