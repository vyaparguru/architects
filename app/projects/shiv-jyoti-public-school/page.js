import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 4 ; 
const videoNumbers = [1,2,3,4,5,6,7]
  // ,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/shiv-jyoti/${i + 1}.jpg`
);

const videos = videoNumbers.map(
  (num) => `/videos/shiv-jyoti/${num}.mp4`
);

const ShivJyoti = () => {
  return (
    <StickyImageStack
      topImage="/projects/12.jpg"
      projectName="Shiv Jyoti Public School"
      images={images}
      videos={videos}
    />
  )
}

export default ShivJyoti