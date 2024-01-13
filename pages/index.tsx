import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="吉田 ショウタ | Yoshida Shota">
    <div className="relative">
      <img
        src="/images/back.jpg"
        alt="Background"
        className="w-full h-[700px] object-cover blur-sm"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-4xl font-bold mb-2">YOSHIDA SHOTA</h1>
        <p className="text-white text-lg">Full Stack Engineer</p>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
