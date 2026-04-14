/**
 * Maps project names → arrays of image URLs (from public/images/projects/).
 * Uses import.meta.env.BASE_URL for correct resolution in dev ("/") and
 * production GitHub Pages ("/Portfolio/").
 */
const BASE = import.meta.env.BASE_URL; // ends with "/"

/** Builds a list of numbered image URLs for a folder */
const imgs = (folder: string, files: string[]): string[] =>
  files.map((f) => `${BASE}images/projects/${folder}/${f}`);

export const projectImages: Record<string, string[]> = {
  Social_Connect: imgs("Social_Connect", [
    "Image1.png",
    "Image2.png",
    "Image3.png",
    "Image4.png",
  ]),

  Youtube_Automation: imgs("Youtube_Automation", ["Image1.png"]),

  Tempusmail: imgs("Tempusmail", [
    "1.png",
    "2.png",
    "3.png",
    "4.png",
    "5.png",
  ]),

  Myntra: imgs("Myntra", [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
  ]),

  Elante_Mall: imgs("Elante_Mall", [
    "Image1.png",
    "Image2.png",
    "Image3.png",
    "Image4.png",
    "Image5.png",
    "Image6.png",
    "Image7.png",
    "Image8.png",
    "Image9.png",
    "Image10.png",
    "Image11.png",
    "Image12.png",
    "Image13.png",
    "Image14.png",
    "Image15.png",
    "Image16.png",
    "Image17.png",
    "Image18.png",
    "Image19.png",
  ]),

  "Market-Seasonality-Explorer": imgs("Market-Seasonality-Explorer", [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
    "image11.png",
    "image12.png",
    "image13.png",
    "image14.png",
    "image15.png",
  ]),

  Skill_Up: imgs("Skill_Up", [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
    "image11.png",
    "image12.png",
    "image13.png",
    "image14.png",
    "image15.png",
  ]),

  Workboard: imgs("Workboard", [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
    "image11.png",
    "image12.png",
    "image13.png",
    "image14.png",
    "image15.png",
  ]),

  // Alias — projectsSlice stores this as "Kanban_WorkBoard" → "Kanban WorkBoard"
  Kanban_WorkBoard: imgs("Workboard", [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
    "image8.png",
    "image9.png",
    "image10.png",
    "image11.png",
    "image12.png",
    "image13.png",
    "image14.png",
    "image15.png",
  ]),

  Amazon: imgs("Amazon", ["image1.png", "image2.png"]),

  "E-commerce": imgs("E-commerce", ["image1.png", "image2.png"]),

  Currency_Converter: imgs("Currency_Converter", ["image1.png"]),
  Password_Generator: imgs("Password_Generator", ["image1.png"]),
  RPS: imgs("RPS", ["image1.png"]),
  "Tic-Tac-Toe": imgs("Tic-Tac-Toe", ["image1.png"]),
  Calculator: imgs("Calculator", ["image1.png"]),
  "Bharat-Clock": imgs("Bharat-Clock", ["image1.png"]),
};

/** Returns image URLs for a project, or an empty array if none.
 *  Accepts both underscore ("Social_Connect") and space ("Social Connect")
 *  variants since projectsSlice transforms names with replace(/_/g, " ").
 */
export function getProjectImages(projectName: string): string[] {
  // Try exact match first, then try replacing spaces with underscores
  return (
    projectImages[projectName] ??
    projectImages[projectName.replace(/ /g, "_")] ??
    []
  );
}
