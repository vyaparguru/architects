import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 11 ; 
const videoNumbers = [];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/the-twin-gables/${i + 1}.jpg`
);

const videos = videoNumbers.map(
  (num) => `/videos/the-twin-gables/${num}.mp4`
);

const Twin = () => {
  return (
    <StickyImageStack
      topImage="/projects/8.JPG"
      projectName="The Twin Gables"
      images={images}
      videos={videos}
    />
  )
}

export default Twin