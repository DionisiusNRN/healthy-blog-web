export default function LegHamstring() {
  const videos = [
    {
      youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Amazing Video",
      caption: "This is an amazing video that explains great concepts.",
    },
    {
      youtubeLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
      title: "Another Great Video",
      caption: "Learn something new with this video.",
    },
    {
      youtubeLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      title: "Amazing Video",
      caption: "This is an amazing video that explains great concepts.",
    },
    {
      youtubeLink: "https://www.youtube.com/embed/tgbNymZ7vqY",
      title: "Another Great Video",
      caption: "Learn something new with this video.",
    },
  ];

  return (
    <div className="flex flex-col 2xl:grid 2xl:grid-cols-2 2xl:max-w-screen-2xl gap-6 p-4 max-w-md md:max-w-screen-md mx-auto h-full">
      {videos.map((video, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-lg"
        >
          {/* Video on the left */}
          {/* flex-none w-1/2 */}
          <div className="">
            <iframe
              src={video.youtubeLink}
              title={`YouTube Video ${index}`}
              className="w-full h-48 rounded"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Title and caption on the right */}
          <div className="flex-grow">
            <h2 className="text-lg font-semibold">{video.title}</h2>
            <p className="mt-2 text-sm">{video.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
