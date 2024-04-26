import React from 'react';
import { Link } from 'react-router-dom';
import Dog from "../../Assets/dog1.jpg";

const CardGrid = () => {
  return (
    <section class="container p-6 mx-auto space-y-3 dark:bg-gray-800 dark:text-white">

    <h4 class="text-xl font-bold text-gray-700 capitalize dark:text-gray-300 md:text-3xl text-center">⚒️ More Tools 🛠️</h4>
    <p class="text-center dark:text-gray-400">Tools that will help you get things done in less time.</p>

    <div class="flex items-center justify-center">
        <div class="grid gap-8 my-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="w-full max-w-xs text-center">

                <a href="/">
                    <div
                        class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200 dark:bg-gray-900 dark:border-gray-600">
                        <div class="py-16 px-4">
                            <h5 class="text-lg font-bold t dark:text-white">Open Bulk URL</h5>
                            <span class="mt-1 font-medium dark:text-gray-400">In new tab/windows</span>
                        </div>
                    </div>
                </a>
            </div>

            <div class="w-full max-w-xs text-center">
                <a href="">
                    <div
                        class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200 dark:bg-gray-900 dark:border-gray-600">
                        <div class="py-16 px-4">
                            <h5 class="text-lg font-bold dark:text-white">Random Websites</h5>
                            <span class="mt-1 font-medium dark:text-gray-400">Random but Useful websites
                                    collection</span>

                        </div>
                    </div>
                </a>
            </div>

            <div class="w-full max-w-xs text-center">
                <a href="">
                    <div
                        class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200 dark:bg-gray-900 dark:border-gray-600">
                        <div class="py-16 px-4">
                            <h5 class="text-lg font-bold dark:text-white">Extract URL from text</h5>
                            <span class="mt-1 font-medium dark:text-gray-400">Easily extract URL in Bulk</span>
                        </div>
                    </div>
                </a>
            </div>


            <div class="w-full max-w-xs text-center">
                <a href="">
                    <div
                        class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-blue-100 border-4 border-blue-200 dark:bg-gray-900 dark:border-gray-600">
                        <div class="py-16 px-4">
                            <h5 class="text-lg font-bold dark:text-white">Auto Reload Websites</h5>
                            <span class="mt-1 font-medium dark:text-gray-400">Useful websites collection</span>
                        </div>
                    </div>
                </a>
            </div>


            <div class="w-full max-w-xs text-center">
                <a href="#">
                    <div
                        class="object-cover object-center w-full h-48 mx-auto rounded-lg bg-gray-100 border-4 border-gray-200 dark:bg-gray-900 dark:border-gray-600">
                        <div class="py-16 px-4">
                            <h5 class="text-lg font-bold dark:text-white">Coming Soon</h5>
                            <span class="mt-1 font-medium dark:text-gray-400">More tools</span>
                        </div>
                    </div>
                </a>
            </div>


        </div>
    </div>
</section>

  );
};

export default CardGrid;
