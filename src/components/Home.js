

const Home =()=>{
   return (
   <div className="padre">
<div className="welcome">
Welcome to TMDB!
</div>
<div className="-search-">
do you want to perform a search?
</div>
<div className="searchh">
   <form class="searchform cf">
   <input type="text" placeholder="Search media"/>
   <button type="submit">Search</button>
 </form>
</div>
   </div>)
}

export default Home