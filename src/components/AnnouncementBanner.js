import { useState, useEffect } from "react";

const AnnouncementBanner = ({ api }) => {
  const [announcement, setAnnouncement] = useState(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    fetch(`${api}/getendpoints/announcements`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.active) setAnnouncement(data);
      })
      .catch(() => {});
  }, [api]);

  if (!announcement || dismissed) return null;

  return (
    <div
      className="flex items-start justify-between mx-auto w-11/12 p-4 mb-6 mt-4 rounded-lg shadow-sm"
      style={{ backgroundColor: "#EFECFD", borderLeft: "4px solid #6D55F1" }}
    >
      <div className="flex-1 min-w-0 pr-4">
        <p className="mona-head font-bold text-base" style={{ color: "#6D55F1" }}>
          {announcement.caption}
        </p>
        <p className="text-sm mt-1 text-stone-700">{announcement.body}</p>
        <p className="text-xs mt-1 text-stone-400">{announcement.date}</p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
        className="text-stone-400 hover:text-stone-600 text-lg leading-none flex-shrink-0 mt-0.5"
      >
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBanner;
