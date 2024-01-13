import Link from "next/link";
import Layout from "../components/Layout";

const WorksPage = () => (
  <Layout title="Works">
    <h1>Works</h1>
    <p>This is the works page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default WorksPage;
