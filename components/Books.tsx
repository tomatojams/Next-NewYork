import axios from "axios";
const API_URL = "https://books-api.nomadcoders.workers.dev/list?name=";
import styles from "../app/styles/books.module.css";
async function getBooks(tomato: string) {
  const res = await axios(`${API_URL}/${tomato}`);
  console.log(res.data.results.list_name);
  return res.data.results;
}

export default async function Books({ tomato }: { tomato: string }) {
  const Books = await getBooks(tomato);
  return (
    <div className={styles.wrapper}>
      {Books.list_name}
      <div className={styles.container}>
        {Books.books.map((book) => (
          <div className={styles.movie} key={book.title}>
            <div className={styles.box}>
              <img className={styles.poster} src={book.book_image} alt={book.title} />
              <span>{book.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
