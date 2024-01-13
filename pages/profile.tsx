import Link from "next/link";
import Layout from "../components/Layout";

const ProfilePage = () => (
  <Layout title="Profile">
    <h1>Profile</h1>
    <p>This is the profile page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default ProfilePage;
