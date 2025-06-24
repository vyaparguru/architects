import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 0; 
const videoNumbers = [];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/the-grid-house/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/the-grid-house/${num}.mp4`
);

const Grid = () => {
  return (
    <StickyImageStack
      topImage="/projects/4.jpg"
      projectName="The Grid House"
      images={images}
      videos={videos}
    />
  )
}

export default Grid