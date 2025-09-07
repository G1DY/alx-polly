"use client";

import { QRCodeSVG } from "qrcode.react";

type QRCodeDisplayProps = {
  url: string;
};

export function QRCodeDisplay({ url }: QRCodeDisplayProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <QRCodeSVG
        value={url}
        size={128}
        bgColor={"#ffffff"}
        fgColor={"#000000"}
        level={"L"}
        includeMargin={false}
      />
    </div>
  );
}
