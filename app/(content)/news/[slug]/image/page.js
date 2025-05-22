import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

export default async function ImagePage({ params }) {
  const { slug } = await params;
  const newsItemSlug = slug;
  const newsItemData = await getNewsItem(newsItemSlug);

  if (!newsItemData) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img
        src={`/images/news/${newsItemData.image}`}
        alt={newsItemData.title}
      />
    </div>
  );
}
