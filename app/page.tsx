import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
     <Link href={"/facebook"}>Facebook</Link>
     <Link href={"/youtube"}>Youtube</Link>
    </div>
  );
}
