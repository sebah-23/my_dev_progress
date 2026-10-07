import hero_video from '../../../assets/images/Hero-video.MOV'

function Hero (){
    return (
    
         <section className="relative h-screen">
         
         <video src={hero_video} autoPlay loop muted playsInline className= "inset-0 w-full h-full object-cover absolute"></video>

         <div className= " relative z-10 h-full flex flex-col item-center justify-center">
           <h1 className="text-5xl font-bold ">unique Accessories, made for you</h1>
           <p className=" text-lg">  Discover beautiful handmade accessories designed
              to add a special touch to your style.</p>
               <button className="bg-pink-300 text-white px-6 py-3 rounded-lg hover:bg-pink-200 transition">Shop Collection</button>
         </div>
         </section>
    )

}
export default Hero;