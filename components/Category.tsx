interface IMovieProps {
  title: string;
  list_name_encoded: string;
  // poster_path: string;
}

import Link from "next/link";
import styles from "../app/styles/book.module.css";

export default function Movie({ list_name_encoded, title }: IMovieProps) {
  return (
    <div className={styles.movie} key={list_name_encoded}>
      <Link href={`/list/${list_name_encoded}`}>{`${title} →`}</Link>
    </div>
  );
}
