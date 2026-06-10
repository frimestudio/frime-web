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
          background: "#1a1aff",
          color: "#ffffff",
          fontSize: 44,
          fontWeight: 900,
          fontFamily: "Helvetica, Arial, sans-serif",
          letterSpacing: "-0.04em",
        }}
      >
        F
      </div>
    ),
    size,
  );
}
