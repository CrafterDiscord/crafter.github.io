import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#36393e]">
      <div className="flex flex-col justify-center items-center gap-5">
        <Image alt="logo" src={"/crafter.png"} width={256} height={256} ></Image>
        <div className="flex flex-row gap-5">
          <a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-5 bg-blue-800 transition rounded" >Discord sunucuna ekle!</a>
          <a className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 p-5 bg-blue-800 rounded" >Bizimle iletişime geç!</a>
        </div>
      </div>
    </main>
  );
}
