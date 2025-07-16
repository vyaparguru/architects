import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 2 ; 
const videoNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/the-glass-house/${i + 1}.jpg`
);

const videos = videoNumbers.map(
  (num) => `/videos/the-glass-house/${num}.mp4`
);

const Glass = () => {
  return (
    <StickyImageStack
      topImage="/projects/5.jpg"
      projectName="The Glass House"
      images={images}
      videos={videos}
    />
  )
}

export default Glass