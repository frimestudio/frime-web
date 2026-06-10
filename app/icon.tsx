import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
            fontSize: 50,
            fontWeight: 900,
            fontFamily: "Helvetica, Arial, sans-serif",
            letterSpacing: "-0.06em",
            // lekko w górę, żeby F było optycznie wyśrodkowane w kółku
            paddingBottom: 4,
          }}
        >
          F
        </div>
      </div>
    ),
    size,
  );
}
