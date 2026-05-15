import mainImg from '../assets/legacy/img1.jpg'

export default function MainVisual() {
  return (
    <section className="main_visual" id="home">
      <div className="container">
        <img src={mainImg} alt="" />
        <div className="title">
          <h1>WEB ENGINEER GEJI</h1>
        </div>
      </div>
    </section>
  )
}
