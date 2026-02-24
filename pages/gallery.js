import Layout from "@/components/Layout";
import GalleryGrid from "@/components/GalleryGrid";

export default function GalleryPage() {
  return (
    <Layout title="Gallery | EventBlizz" active="gallery">
      <GalleryGrid />
    </Layout>
  );
}
