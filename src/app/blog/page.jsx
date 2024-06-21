import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div>
      <h1 className="bg-orange-400 text-white p-2 text-center capitalize text-2xl font-bold">
        Style Blog
      </h1>
      <div className="flex gap-[50px]">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
