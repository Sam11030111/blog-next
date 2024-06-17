import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div>
      <h1 className="my-10 text-xl font-bold">Popular Categories</h1>
      <div className="flex flex-wrap justify-start gap-10">
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg bg-[#57c4ff31] capitalize"
          href="/blog?cat=style"
        >
          <Image
            src="/style.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          style
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg bg-[#da85c731] capitalize"
          href="/blog?cat=style"
        >
          <Image
            src="/fashion.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          fashion
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg bg-[#7fb88133] capitalize"
          href="/blog?cat=style"
        >
          <Image
            src="/food.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          food
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg bg-[#ff795736] capitalize"
          href="/blog?cat=style"
        >
          <Image
            src="/travel.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          travel
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg bg-[#ffb04f45] capitalize"
          href="/blog?cat=style"
        >
          <Image
            src="/culture.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          culture
        </Link>
        <Link
          className="flex items-center gap-2 w-[100%] sm:w-[45%] md:w-[25%] lg:w-[20%] xl:w-[15%] h-[80px] justify-center rounded-lg bg-[#5e4fff31] capitalize"
          href="/blog?cat=style"
        >
          <Image
            src="/coding.png"
            alt=""
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
