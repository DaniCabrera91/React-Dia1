import React from 'react';
const hobby = ["Dibujo", "Pintura", "Musica", "Lectura", "Videojuegos"]
const tech = ["HTML", "CSS", "JavaScript", "NodeJs", "MongoDB", "React", "Git"]
class Home extends React.Component {
  render() {
    return (
      <main className="home">
        <section className="about-me">
          <h2>Sobre Mí</h2>
          <p>Mi nombre es {this.props.name} {this.props.surname} y tengo {this.props.age}.
            Mi pasión desde siempre ha sido el {this.props.passion}, aunque la vida me ha llevado por otros caminos y actualmente estoy estudiando
            {this.props.currentLearning} mas en concreto {this.props.matter}. 
            Principalmente mi interés se centra en la parte de {this.props.interestedIn} aunque sin dejar de lado el back.
          </p>
          <p>
            En mi tiempo libre intento siempre hacer cosas que me llenan y ayudan a despejarme entre las que se encuentran:
          </p>
          <ul className="lista">
        {hobby.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
        </section>
        <div className="technologies">
          <h2>Tech:</h2>
          <p>
            Estas son las diferentes tecnologías que estoy aprendiendo y trabajando con ellas:
          </p>
        <ul className="lista">
          {tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      </div>
      </main>
    );
  }
}

export default Home;



