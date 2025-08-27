"use client";
import { useState } from "react";
import QrScanner from "react-qr-barcode-scanner";

export function QRCodeScanner({ onScan }: { onScan: (data: string) => void }) {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center">
      <QrScanner
        onUpdate={(err, result) => {
          if (result) {
            onScan(result.getText());
          }
          if (err && err.name !== "NotFoundException") {
            setError(err.message || "Scanning error");
          }
        }}
        style={{ width: "100%" }}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
