export default function SignIn() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1> Sign In Page Online Coffee Shop</h1>
      <form className="flex flex-col w-96">
        <label htmlFor="email">Email</label>
        <input type="email" id="email"  required />
        
        <label  className=' text-blue-800' htmlFor="password">Password</label>
        <input type="password" id="password" required />
        <button type="submit">Sign In</button>
         
       </form>
    </main>
  );
}