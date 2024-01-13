import Link from "next/link";
import Layout from "../components/Layout";

const ContactPage = () => (
  <Layout title="吉田 ショウタ | Yoshida Shota">
    <h1>Contact</h1>
    <p>This is the contact page</p>
    <p>
      <Link href="/">Go home</Link>
    </p>
  </Layout>
);

export default ContactPage;
