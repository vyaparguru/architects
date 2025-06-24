import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 6 ; 
const videoNumbers = [1, 3, 4, 5, 7, 8];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/imperial-lines/${i + 1}.jpg`
);

const videos = videoNumbers.map(
  (num) => `/videos/imperial-lines/${num}.mp4`
);

const Twin = () => {
  return (
    <StickyImageStack
      topImage="/projects/9.jpg"
      projectName="Imperial Lines"
      images={images}
      videos={videos}
    />
  )
}

export default Twin