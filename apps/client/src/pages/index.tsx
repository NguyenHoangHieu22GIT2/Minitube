import VideoCard from "@/components/custom-ui/VideoCard";
import { VideoCards } from "@/components/custom-ui/VideoCards";
import Layout from "@/components/layouts/Layout";

export default function Home() {
  return (
    <Layout hasNavBar={true}>
      <VideoCards gridNumber={5}></VideoCards>
    </Layout>
  );
}
