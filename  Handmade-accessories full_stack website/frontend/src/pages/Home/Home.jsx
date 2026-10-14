import Hero from "./sections/Hero";
import Header from "../../components/Header/Header";
import WhatsNew from "./sections/WhatsNew";
import Popular from "./sections/Popular";
import Recomm from "./sections/Recomm";

function Home(){
    return (
      <>
      <Header />
     <main>
       <Hero />
       <WhatsNew />
       <Popular />
       <Recomm />
     </main>
      
      
      
      </>

    )

}