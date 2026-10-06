import her0_video from '../../assets/images/Hero-video.MOV'

function Hero (){
    return (
    
         <section>
         
         <video src={her0_video} autoPlay loop muted playsInline></video>

         <div>
           <h1>unique Accessories, made for you</h1>
           <p>  Discover beautiful handmade accessories designed
              to add a special touch to your style.</p>
               <button>Shop Collection</button>
         </div>
         </section>
    )

}