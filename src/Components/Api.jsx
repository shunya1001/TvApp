import React, { useState, useEffect } from "react";
import Book from './Book';
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShows(data);
    };
    fetchData();
  }, []);

  const handleBookTicketClick = (id) => {
    // Navigate to the Book component passing the ID as a query parameter
    window.location.href = `/Book?id=${id}`;
  };

  return (
    <BrowserRouter basename="/Book">
    <div className="overflow-x-hidden bg-black w-screen flex flex-wrap justify-center gap-9 py-12">
      {shows.map((show) => (
        <div key={show.show.id} className="bg-slate-100 w-80 h-96 rounded-full flex-col p-2 group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 hover:border-4 hover:border-opacity-100 hover:border-solid hover:border-r-yellow-50">
          <div>
            <img className="h-80 w-72 px-16 py-3 rounded-tl-full rounded-tr-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={show.show.image ? show.show.image.medium : ''} alt={show.show.name} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
          <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0 py-2">
            <h1 className="font-dmserif text-2xl font-bold text-white">{show.show.name}</h1>
            <p className="mb-3 text-xs italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{show.show.summary}</p>
            <Link >
            <button onClick={() => handleBookTicketClick(show.show.id)} className="rounded-tl-full rounded-br-full bg-white py-2 px-3.5 font-com text-xs capitalize text-black shadow shadow-black/60 hover:text-sm hover:border-solid hover:border-black hover:border-1">
              BOOK TICKET
            </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </BrowserRouter>
  );
}
