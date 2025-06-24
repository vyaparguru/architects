import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 51; 
const videoNumbers = [1, 2, 3, 4, 5, 6, 7, 8];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/aurora-abode/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/aurora-abode/${num}.mp4`
);

const Aurora = () => {
  return (
    <StickyImageStack
      topImage="/projects/1.JPG"
      projectName="Aurora Abode"
      images={images}
      videos={videos}
    />
  )
}

export default Aurora