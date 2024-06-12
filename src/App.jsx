import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header className="text-gray-700 border-b border-gray-200 bg-blue-200 sticky top-0">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900" mb-4 md:mb-0>
          <span className="text-xl ml-3">KatoTakuma</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300 scroll-smooth">Home</a>
          <a href="#About" className="mr-5 hover:text-blue-400 duration-300 scroll-smooth">About</a>
          <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300 scroll-smooth">Skills</a>
          {/* <a href="#Blog" className=" hover:text-blue-400 first-letter:duration-300">Blog</a> */}
        </nav>
      </div>
     </header>




     <section className="text-gray-700 " id="home">
      <div className="flex container mx-auto py-20 px-20 flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
          <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
            Hi!
            <br />
            I'm Kato Takuma
            <br />
            "The Fearless Man"
          </h1>
          <p className ="mb-8 leading-relaxed">
              　<span></span>初めまして！この自己紹介文をご覧いただきありがとうございます！
              <br/>
              　このポートフォリオは「自分のことをもっと知ってほしい！」という思いがあり、作成に至りました。というのも、僕は生まれてまだ約四半世紀しか経っていないですが、初対面の方には僕の全部を教えることができないほど、ボリューミーな人生を送ってきたのでどうしてもお伝えしたいのです！
              <br/>
              　HTMLやCSSを始めとしたプログラミング言語はこのポートフォリオを作成するために勉強を始めました。まだあまり上手にできていないかも知れませんが、これからも改善をしていくつもりです。ぜひいろんなところに目を通していただけると幸いです！

          </p>
          {/* <button className='text-white bg-green-500 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button> */}
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="./img/icon2.JPG" alt="" />
        </div>
      </div>
     </section>




     <section id="About" className='text-gray-700 border-t border-blue-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>私は新しいことに取り組むことが好きであり、これまで様々なことに挑戦してきました。その一部をここで紹介したいと思います。</p>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quasi neque, enim accusamus maxime sed expedita necessitatibus impedit vero sapiente reprehenderit ducimus exercitationem ab optio facere quod officia dolores voluptatibus alias debitis ex nisi? Quam magnam deleniti eveniet, dolore facilis commodi at facere, sapiente nihil dolores aspernatur obcaecati earum ipsa, voluptatibus temporibus repellendus reiciendis neque repellat dolorum provident quaerat! Tenetur porro molestiae, voluptas animi nam aliquam! Itaque commodi veritatis molestias quod aliquam dolore dolorum ex dolorem labore natus illum suscipit odit, consequuntur a laudantium exercitationem corporis quidem animi necessitatibus qui nobis recusandae accusantium nisi officia. Earum fuga quae saepe vero.</p> */}

        </div>
        {/*カードのdivタグ*/}
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>文系から理系に</h2>
              </div>
              <div>
                <p>
                小学4年生から続けていたバスケットボールを更に極めるために高校はスポーツ科学科に進学。しかし、父に憧れ、ものづくりの道に進むことを決心。偏差値40の高校であり、理系科目が選択できなかったため、卒業後2年間予備校に通う。理系科目（数学B、Ⅲ、物理、化学）についてはそこで学び、一日平均14時間勉強することで偏差値60以上の大学に合格する。それからも勉学に励み、GPA3.2を獲得し大学院入試について筆記試験免除となる。
                </p>
                {/* <a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg></a> */}
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>学内最大規模の団体代表</h2>
              </div>
              <div>
                <p>部員数180人の軽音楽部で部長を務める。入部後、幹部メンバーの一員として活躍し、「コロナ禍からの復活」を公約とし代表に就任。課外活動の制限緩和について、学生課と会議を重ねた結果、ライブや合宿について許可をいただき、公約を達成する。また、部員としての活動にも注力。初心者で入部したが10~20組のバンドが参加する学内コンテストで優勝、準優勝ともに3回経験。・King Gnuコピーバンド（2024）
                  <br />
                  <a href="https://youtu.be/nARvOrlNfvs?si=NaLPaqPSrWmntLGI" className='text-blue-500'>King Gnu コピーバンド 大阪公立大学なかもず軽音楽部 2023/12/2(YouTube)</a>
                </p>
                {/* <a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg></a> */}
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
                    </svg>
                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>新規的な研究</h2>
              </div>
              <div>
                <p>癌などの安全な治療方法を確立することを背景に、「アガロース壁面近傍におけるレーザ誘起気泡の挙動に関する実験的解析」というテーマで研究を進める。生体組織を模したアガロースゲルと水の境界近傍に気泡を生成し、その挙動について撮影・解析を行う。高校時代、スポーツ科学科で身体構造について学習していたこともあり、“人体に関わる工学”に興味をもち、本テーマに決定。水中だけでなく、ゲル内にも気泡を生成することでより医療現場に繋がる研究を目指す。</p>
                {/* <a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg></a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>




     <section id="Skills" className="text-gray-700 border-t border-blue-200">
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
        {/* left side */}
          <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0 justify-center">
            <img
              src="./img/icon3.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* right side */}
          <div className="lg:py-6 lg:pl-12 lg:text-left lg:w-1/2 w-full">
            <h1 className="sm:text-3xl text-2xl font-medium text-gray-900 mb-10 text-center lg:text-left">
              My Skills
            </h1>
            <div className="">
              <div className="w-full">
                <h2>HTML</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "50%" }}>
                    50%
                  </div>
                </div>
                <h2 className="pt-5">CSS</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"style={{ width: "60%" }}>
                    60%
                  </div>
                </div>
                <h2 className="pt-5">Tailwindcss</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "40%" }}>
                    40%
                  </div>
                </div>
                <h2 className="pt-5">Python</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "65%" }}> 
                    65% 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
