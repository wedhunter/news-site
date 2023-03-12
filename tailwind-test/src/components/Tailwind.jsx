import React from 'react';

const Tailwind = () => {
  return (
    <div>
      <div className="max-w-screen-xl m-auto">
        {/* header */}
        <header className="px-2 border-b flex items-center justify-between h-14">
          <a className="uppercase font-bold text-purple-800" href="#">
            webDev
          </a>
          <nav className="hidden md:flex items-center">
            <ul className=" inline-flex items-center">
              <li>
                <a className="header-link" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="header-link" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="header-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            <ul className="inline-flex items-center">
              <li>
                <button className="header-btn transition-all duration-300">
                  Login
                </button>
              </li>
              <li>
                <button className="header-btn">Register</button>
              </li>
            </ul>
          </nav>

          <button className="inline-block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </header>
        {/* breadcrumbs */}
        <div className="px-2 flex items-center">
          <div className="py-4 overflow-y-auto whitespace-nowrap flex items-center">
            <a className="text-gray-600 hover:text-gray-900" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
            <span className="mx-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <a className="text-gray-600 hover:text-gray-900" href="#">
              News
            </a>
            <span className="mx-2 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
            <a className="text-gray-600 hover:text-gray-900" href="#">
              Tech
            </a>
          </div>
        </div>

        {/* banners */}
        <section className="px-2 lg:flex lg:space-x-2">
          <a
            className="w-full lg:w-2/3 bg-gradient-to-tr bg-purple-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
            href="#">
            <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
            <img
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              src="./img-1.jpg"
              alt="news"
            />

            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet consectetur.
              </h2>

              <div className="flex mt-3">
                <img
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  src="https://randomuser.me/api/portraits/men/79.jpg"
                  alt="author"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    John Doe
                  </p>
                  <time className="text-gray-400 text-xs">14 March</time>
                </div>
              </div>
            </div>
          </a>

          <a
            className="w-full lg:w-1/3 bg-indigo-300 h-96 mb-4 relative rounded inline-block overflow-hidden"
            href="#">
            <div className="absolute left-0 top-0 w-full h-full z-10 bg-gradient-to-b from-black/10 to-black/70"></div>
            <img
              className="absolute left-0 top-0 w-full h-full z-0 object-cover"
              src="./img-2.jpg"
              alt="news"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h2>

              <div className="flex mt-3">
                <img
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  src="https://randomuser.me/api/portraits/women/72.jpg"
                  alt="author"
                />
                <div>
                  <p className="font-semibold text-gray-200 text-sm">
                    Lara Johns
                  </p>
                  <time className="text-gray-400 text-xs">19 March</time>
                </div>
              </div>
            </div>
          </a>
        </section>

        <main className="lg:flex">
          <div className="w-full lg:w-2/3">
            {/* post cards */}

            <section className="px-2">
              <a className="block w-full lg:flex mb-10" href="#">
                <img
                  className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                  src="./img-3.jpg"
                  alt="img"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-gray-700 font-bold text-2xl">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.{' '}
                    </h3>
                    <p className="text-gray-700">
                      Lorem Ipsum has been the industry's standard dummy text
                      ever since the 1500s, when an unknown printer took a
                      galley of type and scrambled it to make a type specimen
                      book. It has survived not only five centuries, but also
                      the leap into electronic typesetting, remaining
                      essentially unchanged.
                    </p>
                  </div>

                  <div className="flex mt-3">
                    <img
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                      src="https://randomuser.me/api/portraits/women/9.jpg"
                      alt="author"
                    />
                    <div>
                      <p className="font-semibold text-gray-400 text-sm">
                        Jane Doe
                      </p>
                      <time className="text-gray-400 text-xs">18 March</time>
                    </div>
                  </div>
                </div>
              </a>

              <a className="block w-full lg:flex mb-10" href="#">
                <img
                  className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                  src="./img-4.jpg"
                  alt="img"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-gray-700 font-bold text-2xl">
                      Ut pharetra risus non ligula interdum iaculis.{' '}
                    </h3>
                    <p className="text-gray-700">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English.
                    </p>
                  </div>

                  <div className="flex mt-3">
                    <img
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                      src="https://randomuser.me/api/portraits/women/69.jpg"
                      alt="author"
                    />
                    <div>
                      <p className="font-semibold text-gray-400 text-sm">
                        Sara Damont
                      </p>
                      <time className="text-gray-400 text-xs">4 March</time>
                    </div>
                  </div>
                </div>
              </a>

              <a className="block w-full lg:flex mb-10" href="#">
                <img
                  className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                  src="./img-5.jpg"
                  alt="img"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-gray-700 font-bold text-2xl">
                      Vivamus in tortor vitae lacus feugiat rhoncus.{' '}
                    </h3>
                    <p className="text-gray-700">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites of the word in classical
                      literature, discovered the undoubtable source.
                    </p>
                  </div>

                  <div className="flex mt-3">
                    <img
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                      src="https://randomuser.me/api/portraits/women/89.jpg"
                      alt="author"
                    />
                    <div>
                      <p className="font-semibold text-gray-400 text-sm">
                        Susy Vermont
                      </p>
                      <time className="text-gray-400 text-xs">14 March</time>
                    </div>
                  </div>
                </div>
              </a>

              <a className="block w-full lg:flex mb-10" href="#">
                <img
                  className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                  src="./img-6.jpg"
                  alt="img"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="mb-2 text-gray-700 font-bold text-2xl">
                      Praesent sit amet diam quis eros laoreet elementum at id
                      dolor.{' '}
                    </h3>
                    <p className="text-gray-700">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>

                  <div className="flex mt-3">
                    <img
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                      src="https://randomuser.me/api/portraits/women/66.jpg"
                      alt="author"
                    />
                    <div>
                      <p className="font-semibold text-gray-400 text-sm">
                        Kykky Stoun
                      </p>
                      <time className="text-gray-400 text-xs">24 March</time>
                    </div>
                  </div>
                </div>
              </a>
            </section>

            {/* pagination */}

            <div className="mt-20 mb-10">
              <ul className="flex justify-center">
                <li>
                  <a className="pagination-item rounded-l-lg" href="#">
                    Previous
                  </a>
                </li>
                <li>
                  <a className="pagination-item" href="#">
                    1
                  </a>
                </li>
                <li>
                  <a className="pagination-item" href="#">
                    2
                  </a>
                </li>
                <li>
                  <a
                    className="pagination-item text-blue-600  hover:bg-blue-100 hover:text-blue-600"
                    href="#">
                    3
                  </a>
                </li>
                <li>
                  <a className="pagination-item" href="#">
                    4
                  </a>
                </li>
                <li>
                  <a className="pagination-item" href="#">
                    5
                  </a>
                </li>
                <li>
                  <a className="pagination-item rounded-r-lg" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0">
            {/* topics */}
            <div className="w-full md:w-1/2 lg:w-full mb-5">
              <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
                Popular News
              </h5>
              <ul>
                <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                  <a className="flex items-center text-gray-600" href="#">
                    <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-green-500 to-green-700"></span>
                    Vue
                    <span className="text-gray-500 ml-auto">23 articles</span>
                  </a>
                </li>

                <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                  <a className="flex items-center text-gray-600" href="#">
                    <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-orange-500 to-orange-700"></span>
                    Svelte
                    <span className="text-gray-500 ml-auto">20 articles</span>
                  </a>
                </li>

                <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                  <a className="flex items-center text-gray-600" href="#">
                    <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-red-500 to-red-700"></span>
                    Angular
                    <span className="text-gray-500 ml-auto">15 articles</span>
                  </a>
                </li>

                <li className="px-1 py-4 border-y border-white hover:border-gray-200">
                  <a className="flex items-center text-gray-600" href="#">
                    <span className="inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-blue-500 to-blue-700"></span>
                    React
                    <span className="text-gray-500 ml-auto">7 articles</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 lg:w-full">
              {/* divider */}
              <div className="border border-dotted md:hidden lg:block"></div>
              {/* subscribe */}
              <div className="my-5 md:my-0 lg:my-5">
                <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
                  Subscribe
                </h5>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter
                </p>
                <input
                  placeholder="your email address"
                  type="email"
                  className="text-gray-700 bg-gray-100 p-2 w-full border rounded-t hover:border-gray-600"
                />

                <button className="px-4 py-2 bg-indigo-600 text-white rounded-b w-full hover:bg-indigo-800">
                  Subscribe
                </button>
              </div>
              {/* divider */}
              <div className="border border-dotted md:hidden lg:block"></div>
            </div>
          </div>
        </main>

        {/* footer */}

        <footer className="border-t mt-10 py-10 px-2">
          <div className="md:flex">
            <div className="w-full mb-5 md:w-2/5">
              <h6 className="font-semibold text-gray-700 mb-3">Company</h6>
              <ul>
                <li>
                  <a className="footer-link" href="#">
                    Team
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full mb-5 md:w-2/5">
              <div>
                <h6 className="font-semibold text-gray-700 mb-3">Content</h6>
                <ul>
                  <li>
                    <a className="footer-link" href="#">
                      Block
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">
                      Policy
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">
                      Documentation
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/5">
              <div>
                <h6 className="font-semibold text-gray-700 mb-3">Contact Us</h6>
                <ul className="flex">
                  <li className="mr-2">
                    <a className="footer-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-7 h-7">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="mr-2">
                    <a className="footer-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-7 h-7">
                        <path
                          stroke-linecap="round"
                          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-7 h-7">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Tailwind;
