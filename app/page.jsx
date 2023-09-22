import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Jelajahi & Bagikan&nbsp;
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Perintah AI-mu</span>
      </h1>
      <p className="desc text-center">
        Promptopia adalah tempat berbagi perintah AI yang terbuka untuk dunia
        modern, bertujuan untuk menjelajahi, membangun, dan membagikan
        perintah-perintah kreatif
      </p>

      <Feed />
    </section>
  );
};

export default Home;
