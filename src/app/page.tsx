import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Enter your Name</h1>
      </div>
      <form action="">
        <input type="text" placeholder="Type your name..." />
        <button>Predict Data</button>
      </form>
    </div>
  );
}
