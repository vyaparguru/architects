import StickyImageStack from "@/components/StickyImageStack"

const images = [
  "/projects/aurora-abode/5.JPG",
  "/projects/aurora-abode/2.JPG",
  "/projects/aurora-abode/15.JPG",
  "/projects/aurora-abode/19.jpg",
  "/projects/aurora-abode/29.JPG",
  "/projects/aurora-abode/32.jpg",
  "/projects/aurora-abode/34.jpg",
  "/projects/aurora-abode/35.JPG",
  "/projects/aurora-abode/36.JPG",
  "/projects/aurora-abode/1.JPG",
  "/projects/aurora-abode/3.JPG",
  // "/projects/aurora-abode/4.jpg", **
  // "/projects/aurora-abode/6.jpg", **
  // "/projects/aurora-abode/7.jpg", **
  "/projects/aurora-abode/8.JPG",
  // "/projects/aurora-abode/9.jpg", **
  // "/projects/aurora-abode/10.JPG", **
  // "/projects/aurora-abode/11.JPG", **
  "/projects/aurora-abode/12.jpg",
  // "/projects/aurora-abode/13.JPG", **
  "/projects/aurora-abode/14.jpg",
  "/projects/aurora-abode/16.JPG",
  "/projects/aurora-abode/17.jpg",
  // "/projects/aurora-abode/18.JPG", **
  // "/projects/aurora-abode/20.jpg", **
  "/projects/aurora-abode/21.jpg",
  // "/projects/aurora-abode/22.JPG", **
  "/projects/aurora-abode/23.jpg",
  "/projects/aurora-abode/24.jpg",
  "/projects/aurora-abode/25.JPG",
  "/projects/aurora-abode/26.jpg",
  "/projects/aurora-abode/27.jpg",
  "/projects/aurora-abode/28.jpg",
  "/projects/aurora-abode/30.jpg",
  "/projects/aurora-abode/31.jpg",
  "/projects/aurora-abode/33.jpg",
  "/projects/aurora-abode/37.jpg",
  "/projects/aurora-abode/38.jpg",
  "/projects/aurora-abode/39.jpg",
  "/projects/aurora-abode/40.JPG",
  "/projects/aurora-abode/41.jpg",
  "/projects/aurora-abode/42.jpg",
  "/projects/aurora-abode/43.jpg",
  "/projects/aurora-abode/44.JPG",
  "/projects/aurora-abode/45.jpg",
  "/projects/aurora-abode/46.jpg",
  "/projects/aurora-abode/47.JPG",
  "/projects/aurora-abode/48.JPG",
  "/projects/aurora-abode/49.jpg",
  // "/projects/aurora-abode/50.JPG", ** 
  // "/projects/aurora-abode/51.JPG", **
  "/projects/aurora-abode/52.JPG",
  "/projects/aurora-abode/53.jpg",
  "/projects/aurora-abode/54.jpg",
  "/projects/aurora-abode/55.JPG",
  // "/projects/aurora-abode/56.jpg", **
]

const videoNumbers = [1, 2, 3, 4]
  // , 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

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