import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Чіп Чендж",
  description: "Конвертер валют",
};

export default function CurrencyConverterLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}
