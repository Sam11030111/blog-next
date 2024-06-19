import Image from "next/image";

import Menu from "@/components/menu/Menu";
import Comment from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div>
      <div className="flex items-center gap-[50px]">
        <div className="flex-1">
          <h1 className="text-[30px] sm:text-[40px] xl:text-[50px] font-bold mb-12">
            Dummy Title: My favorite basketball player is Stephen Curry
          </h1>
          <div className="flex items-center gap-5">
            <div className="w-[50px] h-[50px] relative">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
              <span className="text-xl font-medium">Sam Lee</span>
              <span>11.03.2024</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 h-[350px] relative">
          <Image src="/p1.jpeg" alt="" fill className="object-cover" />
        </div>
      </div>
      <div className="flex gap-[50px]">
        <div className="flex-5 mt-[60px]">
          <div>
            <p className="text-sm sm:text-lg font-light mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac aliquet erat, nec pretium urna. Nam molestie eleifend
              vulputate. Mauris nec sapien nisi. Praesent tristique quam lectus,
              sit amet rhoncus nibh euismod eu. Nulla sit amet malesuada eros,
              quis sodales dolor. Suspendisse sollicitudin fringilla
              consectetur.
            </p>
            <h2 className="font-bold text-lg">Lorem ipsum dolor sit amet.</h2>
            <p className="text-sm sm:text-lg font-light mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac aliquet erat, nec pretium urna. Nam molestie eleifend
              vulputate. Mauris nec sapien nisi. Praesent tristique quam lectus,
              sit amet rhoncus nibh euismod eu. Nulla sit amet malesuada eros,
              quis sodales dolor. Suspendisse sollicitudin fringilla
              consectetur.
            </p>
            <p className="text-sm sm:text-lg font-light mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac aliquet erat, nec pretium urna. Nam molestie eleifend
              vulputate. Mauris nec sapien nisi. Praesent tristique quam lectus,
              sit amet rhoncus nibh euismod eu. Nulla sit amet malesuada eros,
              quis sodales dolor. Suspendisse sollicitudin fringilla
              consectetur.
            </p>
            <p className="text-sm sm:text-lg font-light mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ac aliquet erat, nec pretium urna. Nam molestie eleifend
              vulputate. Mauris nec sapien nisi. Praesent tristique quam lectus,
              sit amet rhoncus nibh euismod eu. Nulla sit amet malesuada eros,
              quis sodales dolor. Suspendisse sollicitudin fringilla
              consectetur.
            </p>
          </div>
          <div>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
