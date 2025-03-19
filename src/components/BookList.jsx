import { useState } from "react";
import Book from "./Book";


export default function BookList() {
  const [search, setSearch] = useState('');

  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      description: "A novel about the American dream, wealth, and love in the 1920s."
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      description: "A story of racial injustice and moral growth in the Deep South."
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      description: "A dystopian novel about totalitarianism, surveillance, and control."
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      description: "A classic romance novel exploring themes of love, reputation, and class."
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      description: "A novel about teenage rebellion and alienation."
    },
    {
      id: 6,
      title: "Moby-Dick",
      author: "Herman Melville",
      year: 1851,
      description: "An epic tale of obsession and revenge between man and whale."
    },
    {
      id: 7,
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      description: "A dystopian novel about a futuristic world controlled by technology and conditioning."
    },
    {
      id: 8,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      description: "A fantasy adventure following Bilbo Baggins on his journey to reclaim a lost kingdom."
    },
    {
      id: 9,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      year: 1866,
      description: "A psychological novel about guilt, redemption, and morality."
    },
    {
      id: 10,
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      description: "A philosophical novel about following one's dreams and destiny."
    }
  ];

  const filteredBooks = books.filter((book) => {
    const query = search.toLowerCase();

    const matchesSearch = book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query);

    return matchesSearch;
  })

  return (
    <div style={{
      width: "100%",
      maxWidth: "1080px",
      marginTop: "16px",
      marginBottom: "16px",
      marginInline: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    }}>
      {/* Heading */}
      <h1 style={{textAlign: "center"}}>Book Collection</h1>

      {/* Search */}
      <div style={{
        width: "100%",
        marginInline: "auto",
        padding: "0 8px"
      }}>
      <input
        type="text"
        value={search}
        placeholder="Search by Name or Author..."
        style={{
          width: "100%",
          padding: "5px 2px",
          fontSize: "16px",
          outline: "none"
        }}

        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      {/* Book List */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        margin: "2px 6px",
        alignItems: "center"
      }}>
        {filteredBooks.map(book => {
          return <Book key={book.id} title={book.title} author={book.author} year={book.year} description={book.description} />
        })}
      </div>
    </div>
  )
}
