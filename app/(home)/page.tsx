// 메타데이타는 page 또는  layout 만 export 가능
// 메타데이타는 서버컴포넌트에만 있음

import axios from "axios";

import Category from "../../components/Category";
import styles from "../styles/home.module.css";

export const metadata = {
  title: "Home",
};

const API_URL = "https://books-api.nomadcoders.workers.dev/lists";

async function getCategory() {
  const res = await axios(API_URL);
  // console.log(res.data.results);
  return res.data.results;
}

export default async function TomatoHome() {
  const books = await getCategory();
  return (
    <div className={styles.container}>
      {books.map((book) => (
        <Category
          key={book.list_name}
          list_name_encoded={book.list_name_encoded}
          title={book.display_name}
        />
      ))}
    </div>
  );
}
