import StickyImageStack from "@/components/StickyImageStack"

const imageCount = 0; 
const videoNumbers = [1,2,3];

const images = Array.from({ length: imageCount }, (_, i) =>
  `/projects/the-grand-elan/${i + 1}.JPG`
);

const videos = videoNumbers.map(
  (num) => `/videos/the-grand-elan/${num}.mp4`
);

const Elan = () => {
  return (
    <StickyImageStack
      topImage="/projects/10.jpg"
      projectName="The Grand Elan"
      images={images}
      videos={videos}
    />
  )
}

export default Elan