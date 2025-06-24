import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 0 ; 
const videoNumbers = [];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/the-glass-house/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/the-glass-house/${num}.mp4`
);

const Glass = () => {
  return (
    <StickyImageStack
      topImage="/projects/5.JPG"
      projectName="The Glass House"
      images={images}
      videos={videos}
    />
  )
}

export default Glass