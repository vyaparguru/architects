import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 6 ; 
const videoNumbers = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/roselane-manor/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/roselane-manor/${num}.mp4`
);

const Twin = () => {
  return (
    <StickyImageStack
      topImage="/projects/6.JPG"
      projectName="Roselane Manor"
      images={images}
      videos={videos}
    />
  )
}

export default Twin