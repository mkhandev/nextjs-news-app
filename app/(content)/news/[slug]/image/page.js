import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import React from "react";

function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItemData = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );

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

export default ImagePage;
