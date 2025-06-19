

import StickyImageStack from "@/components/StickyImageStack"

const Demo = () => {
  return (
    <StickyImageStack
      topImage="/projects/aurora-abode/1.JPG"
      projectName="Aurora Abode"
      images={[
        // '/projects/aurora-abode/1.JPG',
        // '/projects/aurora-abode/2.JPG',
        '/projects/aurora-abode/3.JPG',
        '/projects/aurora-abode/4.JPG',
        '/projects/aurora-abode/5.JPG',
        // '/projects/aurora-abode/6.JPG',
      ]}
      videos={[
        '/videos/aurora-abode/1.mov',
        '/videos/aurora-abode/2.mov',
        '/videos/aurora-abode/3.mov',
        '/videos/aurora-abode/4.mov',
        '/videos/aurora-abode/5.mov',
        '/videos/aurora-abode/6.mov',
        '/videos/aurora-abode/7.mov',
        '/videos/aurora-abode/8.mov',
      ]}
    />
  )
}

export default Demo
