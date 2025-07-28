import React, { useState } from "react";

export default function LinkedAssets() {
  const [isHoveredClose, setIsHoveredClose] = useState(false);
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);

  return (
    <div
      style={{
        width: "320px",
        padding: "16px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "#111827",
            margin: 0,
          }}
        >
          Linked assets
        </h2>
      </div>

      {/* Subtext */}
      <p
        style={{
          fontSize: "0.75rem",
          color: "#6b7280",
          marginTop: "4px",
          marginBottom: "12px",
        }}
      >
        All assets referenced in this Zap are listed here.
      </p>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "12px 0",
        }}
      />

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px" }}>
        {["≡ Create Table", "▢ Create Interface"].map((text, index) => (
          <button
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              padding: "4px 8px",
              fontSize: "0.75rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.2s ease",
              backgroundColor:
                hoveredButton === index ? "#f9fafb" : "transparent",
              transform: hoveredButton === index ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={() => setHoveredButton(index)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <span style={{ color: "#f97316" }}>{text.split(" ")[0]}</span>
            {text.split(" ").slice(1).join(" ")}
          </button>
        ))}
      </div>

      <hr
        style={{
          border: "none",
          borderTop: "1px solid #e5e7eb",
          margin: "12px 0",
        }}
      />

      {/* Placeholder */}
      <div
        style={{
          textAlign: "center",
          fontSize: "0.75rem",
          color: "#6b7280",
          padding: "16px",
          border: "1px solid #f3f4f6",
          borderRadius: "6px",
          backgroundColor: "#f9fafb",
          animation: "fadeIn 0.8s ease forwards",
        }}
      >
        Tables and Interfaces used in this Zap will be displayed here.
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
