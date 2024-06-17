import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className="flex items-center gap-[50px] mb-[50px]">
      <div className="hidden lg:flex lg:flex-1 h-[350px] relative">
        <Image src="/p1.jpeg" fill alt="" className="object-cover" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <span className="text-gray-500">11.03.2024 - </span>
          <span className="text-red-400 font-medium">CULTURE</span>
        </div>
        <Link href="/">
          <h1 className="text-xl font-bold">Dummy title</h1>
        </Link>
        <p className="text-sm font-light text-[var(--softTextColor)]">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de limprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il na pas fait que
          survivre cinq siècles, mais sest aussi adapté à la bureautique
          informatique, sans que son contenu nen soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </p>
        <Link className="border-b border-red-400 max-w-max py-1" href="/">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
