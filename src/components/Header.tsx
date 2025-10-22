import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4 px-8 border-b-2 border-foreground flex items-center justify-between">
      <Image
        className="w-36"
        src="/logo-extenso-verde.svg"
        alt=""
        width={0}
        height={0}
      />
    </header>
  );
}
