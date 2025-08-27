// src/domains/shared/components/QRCodeGenerator.tsx
"use client";

import QRCode from "react-qr-code";

export default function QRCodeGenerator({ url }: { url: string }) {
  return (
    <div className="p-4 bg-white rounded-xl shadow-md flex flex-col items-center">
      <QRCode value={url} size={180} />
      <p className="mt-2 text-gray-600 text-sm">Scan to join this poll</p>
    </div>
  );
}
