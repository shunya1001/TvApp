import React, { useEffect, useState } from "react";


export default function Book() {

    return (
        <div className=" bg-black pb-12  " >
        
<footer class="bg-black rounded-lg shadow m-4 dark:bg-gray-800 ">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"> All Rights Reserved. 
      <p>
        Jigyasha Pandey
      </p>
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">jigyashapandey23@gmail.com</a>
        </li>
        <li>
            <a href="#" class="hover:underline">Contact</a>
        </li>
    </ul>
    </div>
</footer>


        </div>
    );
}
