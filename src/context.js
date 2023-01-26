import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const URL = "https://openlibrary.org/search.json?title=";

const AppContext = React.createContext();

//App Provider function
const AppProvider = ({ children }) => {

    //Our States
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState();

    const fetchBooks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${URL}${searchTerm}`);
            //getting the data
            const data = await response.json();
            const { docs } = data;
            console.log(docs);

            if (docs) {
                //sorting the data
                const newBooks = docs.slice(0, 20).map((book) => {
                    const { key, cover_i, author_name, edition_count, first_publish_year, title } = book;
                    return {
                        id: key,
                        author: author_name,
                        title: title,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        cover_id:cover_i
                    }
                });
                setBooks(newBooks);
                if (newBooks.length > 1) {
                    setResultTitle("Your Search Result");
                }
                else {
                    setResultTitle("No Search Result Found!")
                }

            }
            else{
                setBooks([]);
                setResultTitle("No Search Result Found!")
            }
            setLoading(false)
        }
        
        catch (error) {
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);


    useEffect(() => {
        fetchBooks()
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider
            value={{ loading, books, setSearchTerm, resultTitle, setResultTitle }}>
            {children}
        </AppContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };