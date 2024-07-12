export default function SignUp() { 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <h1> Sign Up Page Online Coffee Shop</h1>
     <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button type="submit">Sign Up</button>


     </form>
    </main>
  );
}