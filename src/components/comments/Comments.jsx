import Link from "next/link";
import Image from "next/image";

const Comment = () => {
  const status = "authenticated";

  return (
    <div className="mt-[50px]">
      <h1 className="text-xl font-bold mb-[30px]">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-[30px]">
          <textarea
            className="w-full p-5 rounded-md"
            placeholder="write a comment..."
          />
          <button className="bg-green-700 py-2 px-4 text-white font-bold rounded-md cursor-pointer">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-[30px]">
        <div>
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className="rounded-full object-cover w-[50px] h-[50px]"
            />
            <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
              <span className="font-medium">Sam Lee</span>
              <span className="text-sm">11.03.2024</span>
            </div>
          </div>
          <p className="text-md font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            aliquet erat, nec pretium urna. Nam molestie eleifend vulputate.
            Mauris nec sapien nisi.
          </p>
        </div>
      </div>
      <div className="mt-[30px]">
        <div>
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className="rounded-full object-cover w-[50px] h-[50px]"
            />
            <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
              <span className="font-medium">Sam Lee</span>
              <span className="text-sm">11.03.2024</span>
            </div>
          </div>
          <p className="text-md font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            aliquet erat, nec pretium urna. Nam molestie eleifend vulputate.
            Mauris nec sapien nisi.
          </p>
        </div>
      </div>
      <div className="mt-[30px]">
        <div>
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className="rounded-full object-cover w-[50px] h-[50px]"
            />
            <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
              <span className="font-medium">Sam Lee</span>
              <span className="text-sm">11.03.2024</span>
            </div>
          </div>
          <p className="text-md font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            aliquet erat, nec pretium urna. Nam molestie eleifend vulputate.
            Mauris nec sapien nisi.
          </p>
        </div>
      </div>
      <div className="mt-[30px]">
        <div>
          <div className="flex items-center gap-5 mb-5">
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className="rounded-full object-cover w-[50px] h-[50px]"
            />
            <div className="flex flex-col gap-1 text-[var(--softTextColor)]">
              <span className="font-medium">Sam Lee</span>
              <span className="text-sm">11.03.2024</span>
            </div>
          </div>
          <p className="text-sm sm:text-md font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac
            aliquet erat, nec pretium urna. Nam molestie eleifend vulputate.
            Mauris nec sapien nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
