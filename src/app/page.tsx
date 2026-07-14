import ChatWithSocket from "@/components/ChatWithSocket/ChatWithSocket";
import Banner from "@/components/home/Banner/Banner";

export default function Home() {
  return (
    // min-h-[calc(100vh-theme(spacing.72))] ব্যবহার করা হয়েছে যাতে স্ক্রিনে কনটেন্ট কম থাকলেও ফুটার নিচে লেগে থাকে।
    <div>
      {/* header section */}
      <header>
        <Banner/>
      </header>
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 ">

      <ChatWithSocket/>
      
    
      
    </div>
    </div>
  );
}