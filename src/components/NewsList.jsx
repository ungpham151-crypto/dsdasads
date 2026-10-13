import NewsItem from "./NewsItem";

function NewsList() {
  return (
    <>
      <h2>Danh sách tin tức</h2>

      <NewsItem
        title="NodeJS"
        description="Lập trình backend"
        views={120}
        author="Nguyen Van A"
      />

      <NewsItem
        title="React"
        description="Lập trình frontend"
        views={85}
        author="Nguyen Van B"
      />

      <NewsItem
        title="Express"
        description="Framework Node.js"
        views={60}
        author="Nguyen Van C"
      />
    </>
  );
}

export default NewsList;
