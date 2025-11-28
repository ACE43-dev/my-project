import Profile from "./Profile.jsx"

 function Gallery() {
  return (
    <section>
      <h1 className='m-10 text-red-500'>
        Amazing
      </h1>
      <div className='flex' >
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  )
}
export default Gallery;