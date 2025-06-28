import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 5 ; 
const videoNumbers = [];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/imperial-lines/${i + 1}.jpg`
);

const videos = videoNumbers.map(
  (num) => `/videos/imperial-lines/${num}.mp4`
);

const Twin = () => {
  return (
    <StickyImageStack
      topImage="/projects/imperial-lines/6.jpg"
      projectName="Imperial Lines"
      images={images}
      videos={videos}
    />
  )
}

export default Twin