import portraitImg from '../assets/legacy/image2.png'

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="sub_title">About Me</h2>
      <div className="container">
        <div className="self_img">
          <img src={portraitImg} alt="GEJI" />
        </div>
        <div className="text">
          <div className="name">Kai Gejima</div>
          <p>
            初めまして!平成17年生まれでエンジニア志望のGEJIと申します。
            <br />
            2024年からプログラミングを学び始め、
            <br />
            現在はフルスタックエンジニアを目指して勉強中です。
            <br />
            趣味はランニングやゲーム、音楽を聴くことです。
            <br />
            これからも日々成長していきたいと思っていますので、
            <br />
            よろしくお願いします。
            <br />
          </p>
        </div>
      </div>
    </section>
  )
}
