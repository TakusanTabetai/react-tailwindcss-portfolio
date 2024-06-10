import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-gray-900" mb-4 md:mb-0>
          <span className="text-xl ml-3">KatoTakuma</span>
        </a>
        <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400 duration-300">Home</a>
          <a href="#About" className="mr-5 hover:text-blue-400 duration-300">About</a>
          <a href="#Skills" className="mr-5 hover:text-blue-400 duration-300">Skills</a>
          <a href="#Blog" className=" hover:text-blue-400 first-letter:duration-300">Blog</a>
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
          <button className='text-white bg-green-500 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
        </div>
        <div className="md:w-1/2 lg:max-w-lg w-5/6">
          <img src="./img/icon2.JPG" alt="" />
        </div>
      </div>
     </section>

     <section className='text-gray-700 border-t border-green-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>私の四半世紀の</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quasi neque, enim accusamus maxime sed expedita necessitatibus impedit vero sapiente reprehenderit ducimus exercitationem ab optio facere quod officia dolores voluptatibus alias debitis ex nisi? Quam magnam deleniti eveniet, dolore facilis commodi at facere, sapiente nihil dolores aspernatur obcaecati earum ipsa, voluptatibus temporibus repellendus reiciendis neque repellat dolorum provident quaerat! Tenetur porro molestiae, voluptas animi nam aliquam! Itaque commodi veritatis molestias quod aliquam dolore dolorum ex dolorem labore natus illum suscipit odit, consequuntur a laudantium exercitationem corporis quidem animi necessitatibus qui nobis recusandae accusantium nisi officia. Earum fuga quae saepe vero.</p>

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
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, quo? Magnam possimus placeat rem iste, itaque eos exercitationem distinctio provident.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
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
                    </svg></a>
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
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, quo? Magnam possimus placeat rem iste, itaque eos exercitationem distinctio provident.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
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
                    </svg></a>
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
                <h2 className='text-gray-900 text-lg font-medium ml-2'>Web Developer</h2>
              </div>
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, quo? Magnam possimus placeat rem iste, itaque eos exercitationem distinctio provident.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
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
                    </svg></a>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>

     <section id="skill" className="text-gray-700 border-t border-gray-200">
        <div className="flex container px-5 py-24 mx-auto flex-wrap">
        {/* left side */}
          <div className="rounded w-full mb-10 lg:w-1/2 lg:mb-0 justify-center">
            <img
              src="./img/pc.jpg"
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
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "85%" }}>
                    85%
                  </div>
                </div>
                <h2 className="pt-5">CSS</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white"style={{ width: "80%" }}>
                    80%
                  </div>
                </div>
                <h2 className="pt-5">Javascript</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "65%" }}>
                    65%
                  </div>
                </div>
                <h2 className="pt-5">Tailwindcss</h2>
                <div className="shadow w-full bg-green-100 mt-2">
                  <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{ width: "75%" }}> 75% </div>
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
