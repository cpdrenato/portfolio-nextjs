import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";

const metadata = {
    title: "Darlley - Blog",
    description: "Um blog de pensamentos sobre tecnologia e filosofia.",
    image: "/lotr-1440x522.png"
}

function Blog () {
  const frases = [
    'O problema do mundo de hoje é que as pessoas inteligentes estão cheias de dúvidas, e as pessoas idiotas estão cheias de certezas. — Bertrand Russell',
    'O que eu conheço é uma gota, o que ignoro é um oceano. — Sr. Isaac Newton'
  ]

  const articles = []

  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage>
        <h1>Artigos</h1>

        <div className="citation">
          <p>"O problema do mundo de hoje é que as pessoas inteligentes estão cheias de dúvidas, e as pessoas idiotas estão cheias de certezas". — Bertrand Russell</p>
        </div>
      </HeaderPage>
      <main className="app__content">
        <div className="content__about">
          <h3>Artigos mais recentes</h3>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </button>
        </div>

        <div className="articles__container">
          <ul className="articles">
            {articles.map((article) => 
              <li className="article" key={article.id}>
                <a href={'/blog/'+article.slug}>{article.title}</a>
              </li>
            )}
        </ul>
          {articles.length <= 0 &&
            <div className="w-full text-center">
              <h4 className="text-lg text-slate-500">Artigos em breve 🔥</h4>
            </div>
          }
        </div>
      </main>
    </>
  )
}

export default Blog;
