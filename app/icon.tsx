import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Satori (silnik ImageResponse) ignoruje fontWeight bez realnego pliku
// fontu, dlatego ładujemy Anton z repo. To ten sam display font co na
// stronie, więc F w kółku wygląda jak brandowy lettering.
export default async function Icon() {
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
            width: 64,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1a1aff",
            borderRadius: "50%",
            color: "#ffffff",
            fontSize: 46,
            fontFamily: "Anton",
            // lekko w górę, żeby F było optycznie wyśrodkowane w kółku
            paddingBottom: 3,
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
