import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import HomeContainer from "@/container/Home";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeContainer />
      </main>
      <Footer />
    </>
  );
}
