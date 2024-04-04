import NavBar from "./NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="error-page">
        <img className= "error" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjV2ZHlxN3MwOGI4MmhhZGY5NnR2N2JoYmpwazh3NGxyNTdrM2NtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1gdr4w2pXVbhcP9VOr/giphy.gif"/>
        <img className="error" src="https://media0.giphy.com/media/9ZRHvd4j02Qda09B25/giphy.webp?cid=790b7611848zk9d70dov66ctck98zrmc564pqj2lbjxyn9i6&ep=v1_gifs_search&rid=giphy.webp&ct=g"/>
        <img className="error" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDI3dnFyYmx1dTBlbngybWQ4N3l5MTNnM3E4MGptaXFhMjhidWtvNiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mq5y2jHRCAqMo/giphy.webp"/>
        <img className="error" src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.webp?cid=790b7611h27vqrbluu0enx2md87yy13g3q80jmiqa28buko6&ep=v1_gifs_search&rid=giphy.webp&ct=g" />
      </main>
    </>
  );
}

export default ErrorPage;