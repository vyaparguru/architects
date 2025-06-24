import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 11 ; 
const videoNumbers = [1, 2, 3, 4, 5];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/urban-arches/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/urban-arches/${num}.mp4`
);

const Urban = () => {
  return (
    <StickyImageStack
      topImage="/projects/2.JPG"
      projectName="Urban Arches"
      images={images}
      videos={videos}
    />
  )
}

export default Urban