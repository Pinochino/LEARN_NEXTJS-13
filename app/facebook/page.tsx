'use client';
import { useRouter } from "next/navigation";



function FacebookPage() {
    
    const router = useRouter();

    const handleBtn = () => {
        router.push('/')
    }

    return (
        <div>
            <h2>Facebook Page</h2>
            <div>
                <button onClick={handleBtn} className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back Home</button>
            </div>
        </div>
      );
}

export default FacebookPage;