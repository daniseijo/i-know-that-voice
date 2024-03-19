export function shimmerDataUrl(width: number, height: number): string {
  return `svg+xml;base64,${toBase64(shimmer(width, height))}`;
}

function shimmer(w: number, h: number) {
  const fillColor = "hsl(210 40% 96.1%)"; // It is very expensive to get this color from the css variables so I put the --muted var value directly.

  return `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect id="r" width="${w}" height="${h}" fill="${fillColor}" />
            <animate 
              xlink:href="#r"
              attributeName="opacity"
              values="1;0.5;1"
              calcMode="spline"
              keyTimes="0; 0.5; 1"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </svg>`;
}

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);
