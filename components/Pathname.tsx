'use client';
import { usePathname, useRouter,useParams, useSearchParams } from "next/navigation";
import Link from "next/link";


const Pathname = () => {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();



  return (
    <div>


        <h1>Pathname: {pathname}</h1>
        <h1>Params: {JSON.stringify(params)}</h1>
        <h1>Search Params: {JSON.stringify(searchParams)}</h1>
        <button onClick={() => router.push("/home")}>Go to Home</button>
        <button onClick={() => router.push("/about")}>Go to About</button>

        <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Pathname