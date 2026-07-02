import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Ten sam Anton co w app/icon.tsx: bez realnego pliku fontu satori
// renderuje cienkim Noto Sans i fontWeight nie działa.
export default async function AppleIcon() {
  const anton = await readFile(
    join(process.cwd(), "assets/fonts/Anton-Regular.ttf"),
  );
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1a1aff",
            borderRadius: "50%",
            color: "#ffffff",
            fontSize: 128,
            fontFamily: "Anton",
            paddingBottom: 8,
          }}
        >
          F
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Anton", data: anton, weight: 400, style: "normal" }],
    },
  );
}
