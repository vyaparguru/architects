import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 0; 
const videoNumbers = [];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/the-arch-edge/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/the-arch-edge/${num}.mp4`
);

const Arch = () => {
  return (
    <StickyImageStack
      topImage="/projects/7.JPG"
      projectName="The Arch Edge"
      images={images}
      videos={videos}
    />
  )
}

export default Arch