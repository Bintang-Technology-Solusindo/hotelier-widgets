import { getStyleFromTailwindcss, isDevelopment } from "../../utils/helper";

export const VerticalDarkStyle = async () => {
  if (isDevelopment) return `<link href="/src/index.css" rel="stylesheet">`;
  const style = await getStyleFromTailwindcss();
  return `<style>${style}</style>`;
};
