import React from 'react'

function Home()
{
    return (
        <div>
            <header>
                <nav class="py-8 bg-white">
                    <div class="md:container px-4 md:px-0 mx-auto flex justify-between">
                        <img class="w-16" src="https://capp.nicepage.com/bf483e57c95e271afd13aa25e2ecbbe017068d1d/images/default-logo.png" alt="" />
                        <div class="space-y-1.5 cursor-pointer">
                            <div class="h-1 w-8 bg-gray-600 rounded"></div>
                            <div class="h-1 w-8 bg-gray-600 rounded"></div>
                            <div class="h-1 w-8 bg-gray-600 rounded"></div>
                        </div>
                    </div>
                </nav>

                <div class="bg-orange-100 py-14">
                    <h3 class="text-2xl tracking-widest text-orange-600 text-center">FEATURES</h3>
                    <h1 class="mt-8 text-center text-5xl text-orange-600 font-bold">Our Features & Services.</h1>

                    <div class="md:flex md:justify-center md:space-x-8 md:px-14">
                        <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div class="w-sm">
                                <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg" alt="" />
                                <div class="mt-4 text-orange-600 text-center">
                                    <h1 class="text-xl font-bold">Communications</h1>
                                    <p class="mt-4 text-gray-600">Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                                    <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-orange-600 text-white tracking-widest hover:bg-orange-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div class="w-sm">
                                <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg" alt="" />
                                <div class="mt-4 text-orange-600 text-center">
                                    <h1 class="text-xl font-bold">Inspired Design</h1>
                                    <p class="mt-4 text-gray-600">Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
                                    <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-orange-600 text-white tracking-widest hover:bg-orange-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                            <div class="w-sm">
                                <img class="w-64" src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg" alt="" />
                                <div class="mt-4 text-orange-600 text-center">
                                    <h1 class="text-xl font-bold">Happy Customers</h1>
                                    <p class="mt-4 text-gray-600">Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                                    <button class="mt-8 mb-4 py-2 px-14 rounded-full bg-orange-600 text-white tracking-widest hover:bg-orange-500 transition duration-200">MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <footer class="text-center py-16 bg-gray-700 text-sm">
                <p class="text-white">
                    Sample text. Click to select the text box. Click again or double <br />
                    click to start editing the text.
                </p>
            </footer>

        </div>
    )
}

export default Home