import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 13; 
const videoNumbers = [1,2];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/the-arch-villa/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/the-arch-villa/${num}.mp4`
);

const Arch = () => {
  return (
    <StickyImageStack
      topImage="/projects/3.jpg"
      projectName="The Arch Villa"
      images={images}
      videos={videos}
    />
  )
}

export default Arch