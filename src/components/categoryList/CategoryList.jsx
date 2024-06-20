import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const getCategoryColor = (slug) => {
  switch (slug) {
    case "style":
      return "#57c4ff31";
    case "fashion":
      return "#da85c731";
    case "food":
      return "#7fb88133";
    case "travel":
      return "#ff795736";
    case "culture":
      return "#ffb04f45";
    case "coding":
      return "#5e4fff31";
    default:
      return "#5e4fff31";
  }
};

const CategoryList = async () => {
  const data = await getData();

  return (
    <div>
      <h1 className="my-10 text-xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-start gap-10">
        {data?.map((category) => (
          <Link
            className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg capitalize"
            href="/blog?cat=style"
            key={category._id}
            style={{ backgroundColor: getCategoryColor(category.slug) }}
          >
            {category.img && (
              <Image
                src={category.img}
                alt=""
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
