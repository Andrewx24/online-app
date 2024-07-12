

export default function Contact() { 
  console.log(process.env.new123)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Contact Page Online Coffee Shop</h1>
      
      <form>
        <label htmlFor="name">Name</label>

        <input type="text" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" />
        <button type="submit">Send</button>
        </form>
    </main>
  );
}