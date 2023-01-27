import React from 'react';
import { useGlobalContext } from '../../context';
import Header from "../Header/Header";
import Loading from '../Loader/Loader';
import NotFound_img from '../../images/cover_not_found.jpg';
import Book from "./Book";
import "./Booklist.css";
import { Outlet } from 'react-router-dom';


//https://covers.openlibrary.org/b/id/240727-S.jpg
function Booklist() {
    const {books, loading, resultTitle} = useGlobalContext();

    //Collecting the books that has cover images
    const booksWithCovers= books.map((book)=>{
       return{
        ...book,
        //getting only the id
        id: (book.id).replace("/works/", ""),
        cover_img: book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg` : NotFound_img
       } 
    });

console.log(booksWithCovers);

if(loading) return <Loading />;
  return (
    <div>
   <section className='booklist'>
   <div className='container'>
   <div className='section-title'>
   <h2>{resultTitle}</h2>
   </div>
   <div className='booklist-content grid'>
   {
booksWithCovers.slice(0,30).map((item,index)=>{
   return <Book key={index} {...item} />
})
   }
   </div>
   </div>
   </section>
   <Outlet />
   </div>
  )
}

export default Booklist