import StickyImageStack from "@/components/StickyImageStack"

const videoNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Indices (1-based) that are .jpg
const jpgIndices = [
  4,6,7,9,12,14,17,19,20,21,23,24,26,27,28,
  30,31,32,33,34,37,38,39,41,42,43,45,46,49,53,54
];

// Build the images array from 1 to 56
const images = Array.from({ length: 56 }, (_, i) => {
  const idx = i + 1;
  const ext = jpgIndices.includes(idx) ? 'jpg' : 'JPG';
  return `/projects/aurora-abode/${idx}.${ext}`;
});

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

export default Aurora;