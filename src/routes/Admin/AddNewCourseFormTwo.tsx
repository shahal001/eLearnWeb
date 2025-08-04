import React, { useState } from "react";

interface Video {
  title: string;
  file: File | null;
}

interface Chapter {
  chapterTitle: string;
  videos: Video[];
}

interface Lecture {
  lectureTitle: string;
  chapters: Chapter[];
}

const AddNewCourseFormTwo = () => {
  const [lectures, setLectures] = useState<Lecture[]>([
    {
      lectureTitle: "",
      chapters: [{ chapterTitle: "", videos: [{ title: "", file: null }] }],
    },
  ]);

  const handleLectureChange = (
    index: number,
    field: string,
    value: string | Chapter[]
  ) => {
    const updated = [...lectures];

    if (field === "lectureTitle" && typeof value === "string") {
      updated[index].lectureTitle = value;
    } else if (field === "chapters" && Array.isArray(value)) {
      updated[index].chapters = value;
    }

    setLectures(updated);
  };

  const handleChapterChange = (
    lectureIndex: number,
    chapterIndex: number,
    field: keyof Chapter,
    value: string | Video[]
  ) => {
    const updated = [...lectures];
    const chapter = updated[lectureIndex].chapters[chapterIndex];

    if (field === "chapterTitle" && typeof value === "string") {
      chapter.chapterTitle = value;
    } else if (field === "videos" && Array.isArray(value)) {
      chapter.videos = value;
    }

    setLectures(updated);
  };

  const handleVideoChange = (
    lectureIndex: number,
    chapterIndex: number,
    videoIndex: number,
    field: string,
    value: string | File | null
  ) => {
    const updated = [...lectures];
    const video =
      updated[lectureIndex].chapters[chapterIndex].videos[videoIndex];
    video[field as keyof Video] = value as never;
    setLectures(updated);
  };

  const addLecture = () => {
    setLectures([
      ...lectures,
      {
        lectureTitle: "",
        chapters: [{ chapterTitle: "", videos: [{ title: "", file: null }] }],
      },
    ]);
  };

  const addChapter = (lectureIndex: number) => {
    const updated = [...lectures];
    updated[lectureIndex].chapters.push({
      chapterTitle: "",
      videos: [{ title: "", file: null }],
    });
    setLectures(updated);
  };

  const addVideo = (lectureIndex: number, chapterIndex: number) => {
    const updated = [...lectures];
    updated[lectureIndex].chapters[chapterIndex].videos.push({
      title: "",
      file: null,
    });
    setLectures(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(lectures);
    // Handle file upload or API logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 max-w-4xl mx-auto bg-white rounded-lg space-y-6 shadow"
    >
      <h2 className="text-2xl font-bold text-gray-800">
        📚 Add Lecture Content
      </h2>

      {lectures.map((lecture, lecIndex) => (
        <div key={lecIndex} className="border p-4 rounded-md space-y-4">
          <input
            type="text"
            placeholder="Lecture Title"
            value={lecture.lectureTitle}
            onChange={(e) =>
              handleLectureChange(lecIndex, "lectureTitle", e.target.value)
            }
            className="w-full px-4 py-2 border rounded-md"
          />

          {lecture.chapters.map((chapter, chapIndex) => (
            <div
              key={chapIndex}
              className="border-l-4 border-blue-500 pl-4 mt-4 space-y-3"
            >
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Chapter Title"
                  value={chapter.chapterTitle}
                  onChange={(e) =>
                    handleChapterChange(
                      lecIndex,
                      chapIndex,
                      "chapterTitle",
                      e.target.value
                    )
                  }
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {chapter.videos.map((video, vidIndex) => (
                <div
                  key={vidIndex}
                  className="flex flex-col gap-2 md:flex-row md:items-center"
                >
                  <input
                    type="text"
                    placeholder="Video Title"
                    value={video.title}
                    onChange={(e) =>
                      handleVideoChange(
                        lecIndex,
                        chapIndex,
                        vidIndex,
                        "title",
                        e.target.value
                      )
                    }
                    className="flex-1 px-4 py-2 border rounded-md"
                  />
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) =>
                      handleVideoChange(
                        lecIndex,
                        chapIndex,
                        vidIndex,
                        "file",
                        e.target.files?.[0] || null
                      )
                    }
                    className="flex-1 px-4 py-2 border rounded-md"
                  />
                  {video.file && (
                    <video
                      controls
                      width="190"
                      className="mt-2 rounded-md"
                      src={URL.createObjectURL(video.file)}
                    />
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={() => addVideo(lecIndex, chapIndex)}
                className="text-blue-600 hover:underline text-sm"
              >
                + Add Video
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => addChapter(lecIndex)}
            className="text-green-600 hover:underline text-sm"
          >
            + Add Chapter
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addLecture}
        className="w-full py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        + Add Lecture
      </button>

      <button
        type="submit"
        className="w-full py-2 text-white bg-green-600 hover:bg-green-700 rounded-md"
      >
        Submit Lectures ✅
      </button>
    </form>
  );
};

export default AddNewCourseFormTwo;
