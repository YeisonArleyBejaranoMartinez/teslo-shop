import { titleFont } from "@/confic/fonts";

export default function Home() {
  return (
    <div className="flex min-h-screen  flex-col font-sans">
        <h1>Hola Mundo</h1>
        <h1 className={`${titleFont.className} text-4xl font-bold`}>Hola mundo</h1>
    </div>
  );
}
