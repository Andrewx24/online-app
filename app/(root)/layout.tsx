import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";



export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
        <Header/> 
        <SearchBar/>
     
        {children}
       
        <Footer/>
        </body>
      </html>
    );
  }
 