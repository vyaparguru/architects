import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 0 ; 
const videoNumbers = [];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/casa-flora/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/casa-flora/${num}.mp4`
);

const Casa = () => {
  return (
    <StickyImageStack
      topImage="/projects/11.jpg"
      projectName="Casa Flora"
      images={images}
      videos={videos}
    />
  )
}

export default Casa